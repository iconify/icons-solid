import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu0s6g77s.css';
import '../../css/o/ohftsia-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu0s6g77s wm-a"/><path class="ohftsia-f wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fast-forward"} {...others} />);
}

export default Component;
