import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i4zogmbmh.css';
import '../../css/l/lhwobfbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i4zogmbmh"/><path class="lhwobfbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:insurance-hands"} {...others} />);
}

export default Component;
