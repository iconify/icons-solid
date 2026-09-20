import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8pyz-fzo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/h/hstpbebig.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcPdOtdJO" class="t8pyz-fzo"/></defs><g class="ft5dv1b6b"><use href="#SVGcPdOtdJO"/><use href="#SVGcPdOtdJO" class="p_3zmsvya"/><path class="hstpbebig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:grid-add"} {...others} />);
}

export default Component;
