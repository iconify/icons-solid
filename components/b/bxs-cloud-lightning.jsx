import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_42c7mmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_42c7mmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cloud-lightning"} {...others} />);
}

export default Component;
