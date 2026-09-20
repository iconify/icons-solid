import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qbo-06bir.css';
import '../../css/p/ps3-lcbfd.css';
import '../../css/b/b281nlban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qbo-06bir"/><path class="ps3-lcbfd"/><path class="b281nlban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skating-1"} {...others} />);
}

export default Component;
