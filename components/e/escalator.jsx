import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w49tlwb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w49tlwb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:escalator"} {...others} />);
}

export default Component;
