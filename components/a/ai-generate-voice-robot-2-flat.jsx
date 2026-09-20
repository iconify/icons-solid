import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p-9lnrvey.css';
import '../../css/w/wbfrzdxkc.css';
import '../../css/o/oe68fkbpc.css';
import '../../css/z/zf0lc5abk.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p-9lnrvey"/><path class="wbfrzdxkc"/><path class="oe68fkbpc"/><path class="zf0lc5abk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-generate-voice-robot-2-flat"} {...others} />);
}

export default Component;
