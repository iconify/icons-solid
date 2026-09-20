import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4a8zrxzy.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwpj5tbof.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vooi_2byt.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVG1JY94c6U" class="i4a8zrxzy"/></defs><g class="ft5dv1b6b"><path clip-rule="evenodd" class="iwpj5tbof"/><use href="#SVG1JY94c6U" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVG1JY94c6U" clip-rule="evenodd" class="d2kvgvbvc"/><path class="vooi_2byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hourglass-flat"} {...others} />);
}

export default Component;
