import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja411-5kh.css';
import '../../css/u/uzlnq8nyl.css';
import '../../css/p/p5fvr-byr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ja411-5kh"/><path clip-rule="evenodd" class="uzlnq8nyl"/><path class="p5fvr-byr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-tips-one"} {...others} />);
}

export default Component;
