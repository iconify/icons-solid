import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n51hvo05m.css';
import '../../css/p/pir0p8iya.css';
import '../../css/x/x5__mybwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n51hvo05m"/><rect class="pir0p8iya"/><path class="x5__mybwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:progress-bar"} {...others} />);
}

export default Component;
