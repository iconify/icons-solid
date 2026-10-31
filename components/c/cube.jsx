import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/ju14robju.css';
import '../../css/r/rfwecnb1c.css';
import '../../css/j/j3w8rgb8j.css';
import '../../css/d/d96ks8v-f.css';
import '../../css/a/anobn0-ah.css';
import '../../css/v/v3zt-2qas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ju14robju wm-shadow"/><path class="rfwecnb1c wm-shadow"/><path class="j3w8rgb8j"/><path class="d96ks8v-f"/><path class="anobn0-ah"/><path class="v3zt-2qas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cube"} {...others} />);
}

export default Component;
