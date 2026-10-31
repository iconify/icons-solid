import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e6n0nqbaa.css';
import '../../css/n/nop7pgkob.css';
import '../../css/b/bzj7n2bvd.css';
import '../../css/w/wk1rtzb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e6n0nqbaa wm-shadow"/><path class="nop7pgkob wm-shadow"/><path class="bzj7n2bvd"/><path class="wk1rtzb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chess"} {...others} />);
}

export default Component;
