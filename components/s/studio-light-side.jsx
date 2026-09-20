import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qut0n4lgk.css';
import '../../css/b/b7de_v4rg.css';
import '../../css/x/xwi9-ibln.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qut0n4lgk"/><path class="b7de_v4rg"/><path class="xwi9-ibln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:studio-light-side"} {...others} />);
}

export default Component;
