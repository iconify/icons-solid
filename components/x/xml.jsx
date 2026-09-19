import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db4q_xbwf.css';
import '../../css/x/xvie58q8q.css';
import '../../css/g/gggqxnbbb.css';
import '../../css/g/g7k0f042f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="db4q_xbwf"/><path class="xvie58q8q"/><path class="gggqxnbbb"/><path class="g7k0f042f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:xml"} {...others} />);
}

export default Component;
