import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o77xpg-2g.css';
import '../../css/c/c17guec_w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(-45 8.498 5.5)" class="o77xpg-2g"/><path class="c17guec_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-hammer-construction-hammer-mallet-tool-tools-setting-edit-adjust"} {...others} />);
}

export default Component;
