import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edt2f197a.css';
import '../../css/o/ofm7oebfv.css';
import '../../css/f/f14lao85h.css';
import '../../css/w/wi71tfpgo.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="edt2f197a"/><path class="ofm7oebfv"/><path class="f14lao85h"/><path class="wi71tfpgo"/><path class="o0xw4kbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:do-not-mix"} {...others} />);
}

export default Component;
