import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq4i7fvzd.css';
import '../../css/r/ru21x0hju.css';
import '../../css/z/zdrc5xbac.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xq4i7fvzd"/><path class="ru21x0hju"/><path class="zdrc5xbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-water"} {...others} />);
}

export default Component;
