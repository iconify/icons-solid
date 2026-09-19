import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1aljrw_l.css';
import '../../css/a/afo0ombrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h1aljrw_l"/><path class="afo0ombrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-cog"} {...others} />);
}

export default Component;
