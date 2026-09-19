import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vv_oe0bxd.css';
import '../../css/x/xnpwbqvsp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="vv_oe0bxd"/><path class="xnpwbqvsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dent"} {...others} />);
}

export default Component;
