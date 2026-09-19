import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcicxwbvy.css';
import '../../css/o/opt7t5xjr.css';
import '../../css/x/x03iucczk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gcicxwbvy"/><path class="opt7t5xjr"/><path class="x03iucczk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-carrier-packages"} {...others} />);
}

export default Component;
