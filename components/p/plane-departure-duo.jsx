import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poaufnp4w.css';
import '../../css/o/ov-eidckw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="poaufnp4w"/><path class="ov-eidckw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:plane-departure-duo"} {...others} />);
}

export default Component;
