import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtc0sibbu.css';
import '../../css/a/a05zqoswp.css';
import '../../css/i/indds1b1z.css';
import '../../css/v/v4-oeibyk.css';
import '../../css/z/zv_0hpbfs.css';
import '../../css/t/t92mmzq6l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gtc0sibbu"/><path class="a05zqoswp"/><path class="indds1b1z"/><path class="v4-oeibyk"/><path class="zv_0hpbfs"/><path class="t92mmzq6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ledger"} {...others} />);
}

export default Component;
