import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sgb82cb7q.css';
import '../../css/o/oebz2gi6i.css';
import '../../css/l/lreh8ubkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sgb82cb7q"/><path class="oebz2gi6i"/><path class="lreh8ubkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:uber"} {...others} />);
}

export default Component;
