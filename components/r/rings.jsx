import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d9qv_gtyb.css';
import '../../css/b/bq4cesbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d9qv_gtyb"/><path class="bq4cesbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rings"} {...others} />);
}

export default Component;
