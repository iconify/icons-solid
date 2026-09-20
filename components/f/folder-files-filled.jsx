import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ipm975hdc.css';
import '../../css/k/kxq-picmp.css';
import '../../css/q/qqwtvdb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ipm975hdc"/><path clip-rule="evenodd" class="kxq-picmp"/><path class="qqwtvdb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-files-filled"} {...others} />);
}

export default Component;
