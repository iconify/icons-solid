import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9usotbod.css';
import '../../css/u/uv-ggnbgb.css';
import '../../css/o/oe3u2eq0u.css';
import '../../css/a/aw231xbym.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g9usotbod"/><path class="uv-ggnbgb"/><ellipse class="oe3u2eq0u"/><ellipse class="aw231xbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:faceu"} {...others} />);
}

export default Component;
