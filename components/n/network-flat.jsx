import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvnt53bmx.css';
import '../../css/a/awtogmg2l.css';
import '../../css/g/gh92heb8b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cvnt53bmx"/><path class="awtogmg2l"/><path clip-rule="evenodd" class="gh92heb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:network-flat"} {...others} />);
}

export default Component;
