import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ec0oc1b-f.css';
import '../../css/v/v7oc-z36f.css';
import '../../css/p/p7p1dsjoa.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ec0oc1b-f"/><path class="v7oc-z36f"/><path class="p7p1dsjoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:next-track"} {...others} />);
}

export default Component;
