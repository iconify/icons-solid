import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pp1gl6jey.css';
import '../../css/a/a-q3uypat.css';
import '../../css/g/ge9sgs9jn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pp1gl6jey"/><path class="a-q3uypat"/><path class="ge9sgs9jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dices-entertainment-gaming-dices"} {...others} />);
}

export default Component;
