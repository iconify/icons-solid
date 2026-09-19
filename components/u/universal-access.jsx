import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0-8awbkj.css';
import '../../css/i/iuy23obtc.css';
import '../../css/v/vq0zclbxc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="k0-8awbkj"/><path class="iuy23obtc"/><path clip-rule="evenodd" class="vq0zclbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:universal-access"} {...others} />);
}

export default Component;
