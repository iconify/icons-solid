import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jif-fcboa.css';
import '../../css/l/l2t9bkdqd.css';
import '../../css/h/hd1iybcfi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jif-fcboa"/><path clip-rule="evenodd" class="l2t9bkdqd"/><path class="hd1iybcfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-pdf"} {...others} />);
}

export default Component;
