import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pqvkjslfz.css';
import '../../css/j/jjiany4ql.css';
import '../../css/q/qxq43kb0f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="pqvkjslfz"/><path class="jjiany4ql"/><path class="qxq43kb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shaver"} {...others} />);
}

export default Component;
