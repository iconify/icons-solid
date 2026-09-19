import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlfyfrqop.css';
import '../../css/p/p-dlcqzyg.css';
import '../../css/g/gfz0a8nwo.css';
import '../../css/d/dx5sx9b0u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hlfyfrqop"/><path class="p-dlcqzyg"/><path class="gfz0a8nwo"/><circle class="dx5sx9b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:softshellfloppy"} {...others} />);
}

export default Component;
