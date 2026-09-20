import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjuw63b_k.css';
import '../../css/w/wlve4csvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjuw63b_k"/><path class="wlve4csvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cog"} {...others} />);
}

export default Component;
