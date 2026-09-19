import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/e3pxwlb2y.css';
import '../../css/a/arwk8rbqu.css';
import '../../css/i/i55dhw7ek.css';
import '../../css/f/f9u3ckb7b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="e3pxwlb2y"/><path class="arwk8rbqu"/><path class="i55dhw7ek"/><path class="f9u3ckb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rice"} {...others} />);
}

export default Component;
