import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yszczrbew.css';
import '../../css/b/b-lxpfbna.css';
import '../../css/y/yfl1x81uv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yszczrbew"/><path clip-rule="evenodd" class="b-lxpfbna"/><path class="yfl1x81uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-2-flat"} {...others} />);
}

export default Component;
