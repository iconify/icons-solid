import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mymjfkbja.css';
import '../../css/x/xrc5d4cky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mymjfkbja"/><path class="xrc5d4cky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bandage-leg"} {...others} />);
}

export default Component;
