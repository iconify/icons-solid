import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a3622aqmt.css';
import '../../css/d/dl46ut6jf.css';
import '../../css/y/ycgeubb3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="a3622aqmt"/><path clip-rule="evenodd" class="dl46ut6jf"/><path class="ycgeubb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bottle"} {...others} />);
}

export default Component;
