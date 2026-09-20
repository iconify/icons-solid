import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty8dq-_bw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ty8dq-_bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:scales-line"} {...others} />);
}

export default Component;
