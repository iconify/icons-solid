import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/e/ec9lvsxkj.css';
import '../../css/z/zwf0cly4t.css';
import '../../css/j/jgdiew26a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="p-3d8dotc"/><path class="ec9lvsxkj"/><path clip-rule="evenodd" class="zwf0cly4t"/><path class="jgdiew26a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:adobe-photoshop"} {...others} />);
}

export default Component;
