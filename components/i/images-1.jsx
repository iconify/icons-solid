import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mf4oncbfb.css';
import '../../css/a/almr0fnyn.css';
import '../../css/y/y8y_uhilr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mf4oncbfb"/><path class="almr0fnyn"/><path class="y8y_uhilr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-1"} {...others} />);
}

export default Component;
