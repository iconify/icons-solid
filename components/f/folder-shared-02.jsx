import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xnrrh_l-j.css';
import '../../css/v/vcrsiuejb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xnrrh_l-j"/><path class="vcrsiuejb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-shared-02"} {...others} />);
}

export default Component;
