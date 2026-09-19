import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muhpohbqa.css';
import '../../css/d/dddng97uq.css';
import '../../css/r/r4lh1ibfe.css';
import '../../css/q/qkiuolbwp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="muhpohbqa"/><path class="dddng97uq"/><path class="r4lh1ibfe"/><path class="qkiuolbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:riding-one"} {...others} />);
}

export default Component;
