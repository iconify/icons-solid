import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kawpu8b5a.css';
import '../../css/f/fewzb0bjr.css';
import '../../css/d/d98anlgyz.css';
import '../../css/h/hl9a5jjgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kawpu8b5a"/><path class="fewzb0bjr"/><path class="d98anlgyz"/><path class="hl9a5jjgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:stove-gas-pot"} {...others} />);
}

export default Component;
