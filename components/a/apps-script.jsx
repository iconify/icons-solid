import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmpuuq6uh.css';
import '../../css/t/tq81vbcsk.css';
import '../../css/m/mhz4m5u4t.css';
import '../../css/w/wtlifrzdw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gmpuuq6uh"/><path class="tq81vbcsk"/><path class="mhz4m5u4t"/><path class="wtlifrzdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:apps-script"} {...others} />);
}

export default Component;
