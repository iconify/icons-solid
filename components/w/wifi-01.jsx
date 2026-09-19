import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gwi6sywyz.css';
import '../../css/w/wc19j6nte.css';
import '../../css/l/lza45ccox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gwi6sywyz"/><path class="wc19j6nte"/><circle class="lza45ccox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wifi-01"} {...others} />);
}

export default Component;
