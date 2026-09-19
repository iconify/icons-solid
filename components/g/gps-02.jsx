import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h55xb4bob.css';
import '../../css/o/ows-rgbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h55xb4bob"/><path class="ows-rgbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gps-02"} {...others} />);
}

export default Component;
