import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xlsrtdl7a.css';
import '../../css/l/lgw4mrbtj.css';
import '../../css/r/r7asffbhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="xlsrtdl7a"/><path class="lgw4mrbtj"/><path class="r7asffbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-rectangle"} {...others} />);
}

export default Component;
