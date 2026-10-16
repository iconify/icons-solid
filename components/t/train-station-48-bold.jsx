import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2ev-6zgp.css';
import '../../css/c/cpgk2abrw.css';
import '../../css/i/ikk4chbfi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b2ev-6zgp"/><path class="cpgk2abrw"/><path class="ikk4chbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-station-48-bold"} {...others} />);
}

export default Component;
