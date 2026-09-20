import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk6tkrvjp.css';
import '../../css/z/znnjzyb9r.css';
import '../../css/e/ecj60bbth.css';

const viewBox = {"width":181,"height":91};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGZKo1abnF)" clip-rule="evenodd" class="mk6tkrvjp"/><path fill="url(#SVGZKo1abnF)" clip-rule="evenodd" class="mk6tkrvjp"/><defs><radialGradient id="SVGZKo1abnF" cx="0" cy="0" r="1" gradientTransform="rotate(157.043 75.279 25.938)scale(182.056 371.547)" gradientUnits="userSpaceOnUse"><stop class="znnjzyb9r"/><stop offset="1" class="ecj60bbth"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:polars"} {...others} />);
}

export default Component;
