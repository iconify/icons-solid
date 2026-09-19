import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ko2y0-bbf.css';
import '../../css/a/a7qjppb9s.css';
import '../../css/p/pmdg8_b3d.css';
import '../../css/v/vb8m2xbov.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ko2y0-bbf"/><path class="a7qjppb9s"/><path class="pmdg8_b3d"/><path class="vb8m2xbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:womans-sandal"} {...others} />);
}

export default Component;
