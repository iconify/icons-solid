import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uaumiac8d.css';
import '../../css/r/rxmld75-t.css';
import '../../css/f/fnryfbblz.css';
import '../../css/s/scgf5xban.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uaumiac8d"/><path class="rxmld75-t"/><path class="fnryfbblz"/><path class="scgf5xban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clapperboard"} {...others} />);
}

export default Component;
