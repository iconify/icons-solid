import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1e17is5k.css';
import '../../css/n/neyxf6b1l.css';
import '../../css/f/fsctxhtnc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g1e17is5k"/><path class="neyxf6b1l"/><path class="fsctxhtnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-plane"} {...others} />);
}

export default Component;
