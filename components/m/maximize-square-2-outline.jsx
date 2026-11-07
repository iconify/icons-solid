import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdva5qsyp.css';
import '../../css/j/jwcaxlbam.css';
import '../../css/k/kll7rqb_y.css';
import '../../css/z/zpih-bbov.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdva5qsyp"/><path class="jwcaxlbam"/><path class="kll7rqb_y"/><path class="zpih-bbov"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-2-outline"} {...others} />);
}

export default Component;
