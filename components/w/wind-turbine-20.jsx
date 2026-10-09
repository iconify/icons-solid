import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmkmg5bsb.css';
import '../../css/q/q4ceabbxp.css';
import '../../css/u/ui1ds7bjd.css';
import '../../css/s/s9r26bojq.css';
import '../../css/x/xrc1i6b3b.css';
import '../../css/i/isrt4z8rw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xmkmg5bsb"/><path class="q4ceabbxp"/><path class="ui1ds7bjd"/><path class="s9r26bojq"/><path class="xrc1i6b3b"/><path class="isrt4z8rw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-20"} {...others} />);
}

export default Component;
