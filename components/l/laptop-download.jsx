import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-fofisai.css';
import '../../css/f/f-xi9xbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w-fofisai"/><path class="f-xi9xbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-download"} {...others} />);
}

export default Component;
