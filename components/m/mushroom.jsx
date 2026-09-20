import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyefmbdcw.css';
import '../../css/f/fc0n3k16d.css';
import '../../css/u/utv6qqbkb.css';
import '../../css/w/whkqkbbra.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="cyefmbdcw"/><circle class="fc0n3k16d"/><circle class="utv6qqbkb"/><circle class="whkqkbbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mushroom"} {...others} />);
}

export default Component;
