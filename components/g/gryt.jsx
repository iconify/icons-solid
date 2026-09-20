import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebhti3bhc.css';
import '../../css/c/cnutoacyz.css';
import '../../css/a/ay7wqkp7z.css';
import '../../css/j/j1--ccbjk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebhti3bhc"/><path class="cnutoacyz"/><path class="ay7wqkp7z"/><path class="j1--ccbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gryt"} {...others} />);
}

export default Component;
