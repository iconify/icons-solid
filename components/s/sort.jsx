import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/x/xuwun2u6v.css';
import '../../css/h/hzpbaixyj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="xuwun2u6v"/><path class="hzpbaixyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort"} {...others} />);
}

export default Component;
