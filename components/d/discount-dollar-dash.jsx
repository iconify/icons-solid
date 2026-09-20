import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9654jfen.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqb8g9b1w.css';
import '../../css/q/q6hogdb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGVxmj6dzG" class="d9654jfen"/></defs><g class="ft5dv1b6b"><use href="#SVGVxmj6dzG"/><use href="#SVGVxmj6dzG"/><path class="xqb8g9b1w"/><path class="q6hogdb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:discount-dollar-dash"} {...others} />);
}

export default Component;
