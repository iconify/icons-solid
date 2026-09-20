import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlcn2cboi.css';
import '../../css/x/x01ecnbfj.css';
import '../../css/m/mltmzybmp.css';
import '../../css/c/c51w9-bkm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vlcn2cboi"/><path class="x01ecnbfj"/><path class="mltmzybmp"/><path class="c51w9-bkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vuepress-open"} {...others} />);
}

export default Component;
