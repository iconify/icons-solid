import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u2suhjocy.css';
import '../../css/h/h446xvbip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u2suhjocy"/><path class="h446xvbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:screen-curved"} {...others} />);
}

export default Component;
