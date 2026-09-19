import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oa952hwxx.css';
import '../../css/e/e3a4n20td.css';
import '../../css/s/s35wv-bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oa952hwxx"/><path class="e3a4n20td"/><path class="s35wv-bzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-carrier-human"} {...others} />);
}

export default Component;
