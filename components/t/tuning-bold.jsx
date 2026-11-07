import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db19ynbqi.css';
import '../../css/k/kmo065zza.css';
import '../../css/u/uv20i7b6z.css';
import '../../css/l/lwypf-boe.css';
import '../../css/p/pirwrdbar.css';
import '../../css/o/o8bcbj09y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="db19ynbqi"/><path class="kmo065zza"/><path class="uv20i7b6z"/><path class="lwypf-boe"/><path class="pirwrdbar"/><path class="o8bcbj09y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-bold"} {...others} />);
}

export default Component;
