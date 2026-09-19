import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnfili8xo.css';
import '../../css/n/nnly1dl6q.css';
import '../../css/p/p2ysx8bbc.css';
import '../../css/z/zbo3cxv1e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bnfili8xo"/><path class="nnly1dl6q"/><path class="p2ysx8bbc"/><path class="zbo3cxv1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:people-outline"} {...others} />);
}

export default Component;
