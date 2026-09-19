import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plfdthb2m.css';
import '../../css/y/y7zj29b0m.css';
import '../../css/x/xo2xcjy6n.css';
import '../../css/x/xwbjtf4oa.css';
import '../../css/p/pz_3i-5iq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="plfdthb2m"><rect class="y7zj29b0m"/><rect class="xo2xcjy6n"/><rect class="xwbjtf4oa"/><rect class="pz_3i-5iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-bold"} {...others} />);
}

export default Component;
