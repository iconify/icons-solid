import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4250zhsi.css';
import '../../css/l/l8da1zbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="f4250zhsi"/><path class="l8da1zbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-linkedin"} {...others} />);
}

export default Component;
