import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgovvk22o.css';
import '../../css/e/eapcgfbcu.css';
import '../../css/v/vuimjcshx.css';
import '../../css/v/v14kdv8za.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="wgovvk22o"><path class="eapcgfbcu"/><path class="vuimjcshx"/><path class="v14kdv8za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ygeeker"} {...others} />);
}

export default Component;
