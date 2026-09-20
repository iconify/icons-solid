import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cigw37j_r.css';
import '../../css/o/ob2jvhbxi.css';
import '../../css/y/yutdk-b8d.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/o/o90dfjbua.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill="url(#SVGtkB1tcCe)" class="cigw37j_r"/><path fill="url(#SVG00TKrd8o)" class="ob2jvhbxi"/><defs><linearGradient id="SVGtkB1tcCe" x1="13.469" x2="12.557" y1="4.823" y2="21.302" gradientUnits="userSpaceOnUse"><stop offset=".313" class="yutdk-b8d"/><stop offset="1" class="vc--wpv5i"/></linearGradient><linearGradient id="SVG00TKrd8o" x1="13.739" x2="5.647" y1="4.229" y2="17.386" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="o90dfjbua"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kwaipilot"} {...others} />);
}

export default Component;
