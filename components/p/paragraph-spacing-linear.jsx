import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/poyc1firz.css';
import '../../css/b/bq0ypf47a.css';
import '../../css/i/iim04tfhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="poyc1firz"/><path class="bq0ypf47a"/><path class="iim04tfhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-linear"} {...others} />);
}

export default Component;
