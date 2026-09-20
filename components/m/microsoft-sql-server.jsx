import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouu5fubno.css';
import '../../css/j/jxdnd7jvd.css';
import '../../css/u/ugg9r97ta.css';
import '../../css/e/exge6cbhv.css';
import '../../css/y/yzqcqkmnt.css';
import '../../css/w/wahm6kbfo.css';
import '../../css/o/oo7rfrb2l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ouu5fubno"/><path class="jxdnd7jvd"/><path class="ugg9r97ta"/><path class="exge6cbhv"/><path class="yzqcqkmnt"/><path class="wahm6kbfo"/><path class="oo7rfrb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:microsoft-sql-server"} {...others} />);
}

export default Component;
