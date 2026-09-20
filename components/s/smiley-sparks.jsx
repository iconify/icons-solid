import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/f/ficsw7bqf.css';
import '../../css/t/tz92w9bzv.css';
import '../../css/b/b5yl-6_km.css';
import '../../css/j/j6c3libvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="ficsw7bqf"/><path class="tz92w9bzv"/><path class="b5yl-6_km"/><path class="j6c3libvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smiley-sparks"} {...others} />);
}

export default Component;
