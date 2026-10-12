import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekket2bzx.css';
import '../../css/p/pm-7cceht.css';
import '../../css/c/ctxwr35tf.css';
import '../../css/x/xeew2cc-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ekket2bzx"/><path class="pm-7cceht"/><path class="ctxwr35tf"/><path class="xeew2cc-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:building-complex-duotone"} {...others} />);
}

export default Component;
