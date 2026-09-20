import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we8ybbqij.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/c/cb1jno2qa.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGz9eH7cdF" class="we8ybbqij"/></defs><g class="ft5dv1b6b"><use href="#SVGz9eH7cdF"/><g class="p_3zmsvya"><use href="#SVGz9eH7cdF"/><path class="cb1jno2qa"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:server"} {...others} />);
}

export default Component;
