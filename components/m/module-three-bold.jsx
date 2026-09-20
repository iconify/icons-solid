import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryf61ccyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryf61ccyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:module-three-bold"} {...others} />);
}

export default Component;
