import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lyyvkgbuo.css';
import '../../css/y/ylbyunbil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lyyvkgbuo"/><path class="ylbyunbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:google-keep-logo-2"} {...others} />);
}

export default Component;
