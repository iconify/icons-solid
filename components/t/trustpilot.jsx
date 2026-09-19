import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0216bb9l.css';
import '../../css/o/o_a2tub4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0216bb9l"/><path class="o_a2tub4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:trustpilot"} {...others} />);
}

export default Component;
