import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7y7ddcjv.css';
import '../../css/t/tp_md9bnt.css';
import '../../css/u/uch44xcum.css';
import '../../css/l/lkoadtbup.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="l7y7ddcjv"/><rect class="tp_md9bnt"/><rect class="uch44xcum"/><rect class="lkoadtbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:cloud-rain-f"} {...others} />);
}

export default Component;
