import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myb7yfwem.css';
import '../../css/v/vgystqbcr.css';
import '../../css/l/llh36p0xj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="myb7yfwem"/><path class="vgystqbcr"/><path class="llh36p0xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed"} {...others} />);
}

export default Component;
