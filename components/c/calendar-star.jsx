import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf_ef62wo.css';
import '../../css/o/o_kremszb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf_ef62wo"/><path class="o_kremszb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-star"} {...others} />);
}

export default Component;
