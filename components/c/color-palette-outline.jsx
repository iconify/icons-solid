import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw6dw9bpm.css';
import '../../css/a/a9drticeq.css';
import '../../css/k/klvat-kpw.css';
import '../../css/a/ar4i5wb4o.css';
import '../../css/z/zozx40bsi.css';
import '../../css/c/cwvxs5onk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hw6dw9bpm"/><circle class="a9drticeq"/><circle class="klvat-kpw"/><circle class="ar4i5wb4o"/><circle class="zozx40bsi"/><circle class="cwvxs5onk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:color-palette-outline"} {...others} />);
}

export default Component;
