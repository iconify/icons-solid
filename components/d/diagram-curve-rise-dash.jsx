import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q42vlfw3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q42vlfw3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-curve-rise-dash"} {...others} />);
}

export default Component;
