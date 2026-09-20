import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/ts9smeb3v.css';
import '../../css/v/v7x4ucb2s.css';
import '../../css/m/mg7qgd5-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ts9smeb3v"/><path class="v7x4ucb2s"/><path class="mg7qgd5-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:daytum-logo"} {...others} />);
}

export default Component;
