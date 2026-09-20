import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/oikkfrqjb.css';
import '../../css/t/t8oad9btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="oikkfrqjb"/><path class="t8oad9btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:flag-3"} {...others} />);
}

export default Component;
