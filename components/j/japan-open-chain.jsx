import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j145oz9rj.css';
import '../../css/a/acy54mpdx.css';
import '../../css/z/zd6xu_b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGLHjr9b4M" class="j145oz9rj"/></defs><path class="acy54mpdx"/><use href="#SVGLHjr9b4M"/><path class="zd6xu_b-s"/><use href="#SVGLHjr9b4M"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:japan-open-chain"} {...others} />);
}

export default Component;
