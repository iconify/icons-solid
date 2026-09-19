import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzx2lebap.css';
import '../../css/m/mrexazbtc.css';
import '../../css/e/e-qw-wqmo.css';
import '../../css/o/o9wti8bpp.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="xzx2lebap"/><path class="mrexazbtc"/><path class="e-qw-wqmo"/><path clip-rule="evenodd" class="o9wti8bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ohmyzsh"} {...others} />);
}

export default Component;
