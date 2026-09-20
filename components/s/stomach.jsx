import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0-zxqbky.css';
import '../../css/p/p617vlwzy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nc_hz9_1i.css';
import '../../css/n/njbis9f4w.css';
import '../../css/y/y8gs3st7w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i0-zxqbky"/><path class="p617vlwzy"/><g class="jn8qy4bru"><path class="nc_hz9_1i"/><path class="njbis9f4w"/><path class="y8gs3st7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stomach"} {...others} />);
}

export default Component;
