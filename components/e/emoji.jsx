import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7fv2d15r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q7fv2d15r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:emoji"} {...others} />);
}

export default Component;
