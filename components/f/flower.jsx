import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zluskmfki.css';
import '../../css/l/ld754blgk.css';
import '../../css/b/bucefnbvf.css';
import '../../css/n/ndsrwmbkq.css';
import '../../css/u/u92sb79cl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zluskmfki"/><path class="ld754blgk wm-shadow"/><path class="bucefnbvf"/><path class="ndsrwmbkq"/><path class="u92sb79cl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flower"} {...others} />);
}

export default Component;
