import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chq2n9bef.css';
import '../../css/x/xxrtmfzte.css';
import '../../css/v/vuc2d-btj.css';
import '../../css/h/hfjhz_52g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="chq2n9bef"/><path class="xxrtmfzte"/><path class="vuc2d-btj"/><path class="hfjhz_52g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:give-gift"} {...others} />);
}

export default Component;
