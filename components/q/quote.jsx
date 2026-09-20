import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v33e6obfz.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOr9jDdOA" class="v33e6obfz"/></defs><g class="ft5dv1b6b"><use href="#SVGOr9jDdOA"/><use href="#SVGOr9jDdOA" class="p_3zmsvya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:quote"} {...others} />);
}

export default Component;
