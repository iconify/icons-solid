import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zzirv6pbn.css';
import '../../css/z/zu-rj5bim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zzirv6pbn"/><path class="zu-rj5bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:mouse-2"} {...others} />);
}

export default Component;
