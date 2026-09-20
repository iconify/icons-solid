import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsx0iobkq.css';
import '../../css/z/z_cctmbhw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/h07ij6yks.css';
import '../../css/i/i6ch20b2k.css';
import '../../css/g/g-4j00rqa.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hsx0iobkq"/><path class="z_cctmbhw"/><g class="jn8qy4bru"><path class="h07ij6yks"/><path class="i6ch20b2k"/><path class="g-4j00rqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cat"} {...others} />);
}

export default Component;
