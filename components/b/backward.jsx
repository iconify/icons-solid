import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6re2cboh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGzKSuAdvA" class="t6re2cboh"/></defs><g class="ft5dv1b6b"><use href="#SVGzKSuAdvA"/><use href="#SVGzKSuAdvA" class="p_3zmsvya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:backward"} {...others} />);
}

export default Component;
