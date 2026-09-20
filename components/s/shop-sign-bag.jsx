import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rcrjzdrqy.css';
import '../../css/h/h6xo0_btj.css';
import '../../css/a/ayfls2beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rcrjzdrqy"/><path class="h6xo0_btj"/><path class="ayfls2beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shop-sign-bag"} {...others} />);
}

export default Component;
