import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fiyl0jqdl.css';
import '../../css/i/i-8mglydi.css';
import '../../css/k/kt5u6m9fg.css';
import '../../css/i/i1mwrf8fx.css';
import '../../css/v/v-gcjbche.css';
import '../../css/s/sk6glgb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fiyl0jqdl wm-shadow"/><path class="i-8mglydi"/><path class="kt5u6m9fg"/><path class="i1mwrf8fx"/><path class="v-gcjbche"/><path class="sk6glgb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flask-conical"} {...others} />);
}

export default Component;
