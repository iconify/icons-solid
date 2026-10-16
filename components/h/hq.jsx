import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gi3-8pbkf.css';
import '../../css/i/i611vin5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gi3-8pbkf"/><rect transform="matrix(0 -1 -1 0 20.37 17.1)" class="i611vin5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hq"} {...others} />);
}

export default Component;
