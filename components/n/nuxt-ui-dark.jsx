import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5ongbmkj.css';
import '../../css/p/puznsdb6i.css';
import '../../css/n/ngsnuobji.css';

const viewBox = {"width":165,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z5ongbmkj"/><path class="puznsdb6i"/><path clip-rule="evenodd" class="ngsnuobji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nuxt-ui-dark"} {...others} />);
}

export default Component;
