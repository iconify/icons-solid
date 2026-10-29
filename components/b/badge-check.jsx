import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aalpvibbi.css';
import '../../css/p/p3bxyab7z.css';
import '../../css/d/db1_mcb5y.css';
import '../../css/x/xre_yib3j.css';
import '../../css/s/sa47p_3jr.css';
import '../../css/t/t53-41ber.css';
import '../../css/r/rv7hd0bpo.css';
import '../../css/q/q9u4ufj4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aalpvibbi wm-shadow"/><path class="p3bxyab7z wm-k"/><path class="db1_mcb5y wm-k"/><path class="wm-k xre_yib3j"/><path class="sa47p_3jr wm-k"/><path class="t53-41ber wm-k"/><path class="rv7hd0bpo wm-shine"/><path class="q9u4ufj4j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:badge-check"} {...others} />);
}

export default Component;
