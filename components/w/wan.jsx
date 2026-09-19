import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/imhgw_b3f.css';
import '../../css/c/c_2ovccxd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="imhgw_b3f"/><path class="c_2ovccxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wan"} {...others} />);
}

export default Component;
