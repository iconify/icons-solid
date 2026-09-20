import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfnk77btx.css';
import '../../css/m/mxiripbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zfnk77btx"/><path class="mxiripbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file-2"} {...others} />);
}

export default Component;
