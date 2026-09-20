import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tq0ay4bph.css';
import '../../css/p/p6nw2ebqo.css';
import '../../css/j/jj1aelbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tq0ay4bph"/><path class="p6nw2ebqo"/><path class="jj1aelbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:currency-sign-rupee-decrease"} {...others} />);
}

export default Component;
