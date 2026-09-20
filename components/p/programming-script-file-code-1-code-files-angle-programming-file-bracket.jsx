import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/isjpm0-jh.css';
import '../../css/z/zouhmv_ax.css';
import '../../css/g/gn6i4kmum.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="isjpm0-jh"/><path class="zouhmv_ax"/><path class="gn6i4kmum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-script-file-code-1-code-files-angle-programming-file-bracket"} {...others} />);
}

export default Component;
