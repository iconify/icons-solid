import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/z/z3mr_0bdb.css';
import '../../css/y/y4ud7h78k.css';
import '../../css/g/ghnrqje-t.css';
import '../../css/h/ht860ybqd.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="z3mr_0bdb"/><g transform="translate(-210 -1)"><path class="y4ud7h78k"/><circle class="ghnrqje-t"/><path class="ht860ybqd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:sun"} {...others} />);
}

export default Component;
