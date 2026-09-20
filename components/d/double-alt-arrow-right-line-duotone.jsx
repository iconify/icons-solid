import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l9qio6kvn.css';
import '../../css/b/bxzc_ovps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l9qio6kvn"/><path class="bxzc_ovps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-right-line-duotone"} {...others} />);
}

export default Component;
