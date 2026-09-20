import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/d/dawcsab1j.css';
import '../../css/l/l9ltfkg5m.css';
import '../../css/z/z9iiepb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="dawcsab1j"/><path class="l9ltfkg5m"/><path class="z9iiepb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:album-line"} {...others} />);
}

export default Component;
