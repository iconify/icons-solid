import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r8es29b3x.css';
import '../../css/o/ocf4kgbyt.css';
import '../../css/t/tb84h-beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r8es29b3x"/><path class="ocf4kgbyt"/><path class="tb84h-beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mobile-shopping-shop-basket"} {...others} />);
}

export default Component;
