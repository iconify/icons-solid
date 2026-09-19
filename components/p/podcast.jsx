import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbokbbcvl.css';
import '../../css/z/z1k330fvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dbokbbcvl"/><path class="z1k330fvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:podcast"} {...others} />);
}

export default Component;
