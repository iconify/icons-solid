import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzkxxlbjg.css';
import '../../css/j/jfyd0-b7p.css';
import '../../css/j/j-h21xgaa.css';
import '../../css/o/osrapabyl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zzkxxlbjg"/><g class="jfyd0-b7p"><path transform="matrix(.53379 0 0 .54472 7.231 7.141)" class="j-h21xgaa"/><path transform="matrix(.53379 0 0 .54472 7.231 7.141)" class="osrapabyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-gradle"} {...others} />);
}

export default Component;
