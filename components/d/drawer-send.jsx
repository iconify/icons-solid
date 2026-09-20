import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xouoi2qka.css';
import '../../css/v/v0oexfbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xouoi2qka"/><path class="v0oexfbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:drawer-send"} {...others} />);
}

export default Component;
