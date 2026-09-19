import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_zm7infu.css';
import '../../css/j/jzvydlbca.css';
import '../../css/t/t2jzbtbga.css';
import '../../css/c/clmzz-59m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_zm7infu"/><path class="jzvydlbca"/><path class="t2jzbtbga"/><path class="clmzz-59m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:octopus"} {...others} />);
}

export default Component;
