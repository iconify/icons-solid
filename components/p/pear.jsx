import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2bc_dbqk.css';
import '../../css/l/lg3s6q7pu.css';
import '../../css/p/pohg4abrz.css';
import '../../css/k/ktlo7wbkr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b2bc_dbqk"/><path class="lg3s6q7pu"/><path class="pohg4abrz"/><path class="ktlo7wbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pear"} {...others} />);
}

export default Component;
