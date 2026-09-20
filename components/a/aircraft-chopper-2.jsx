import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wj-fa2b7o.css';
import '../../css/j/j6nph7o9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wj-fa2b7o"/><path class="j6nph7o9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:aircraft-chopper-2"} {...others} />);
}

export default Component;
