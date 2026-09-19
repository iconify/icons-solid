import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji4dzvl8f.css';
import '../../css/b/bzl494b5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ji4dzvl8f"/><path class="bzl494b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-game-controller-b"} {...others} />);
}

export default Component;
