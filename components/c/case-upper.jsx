import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfhvasb9y.css';
import '../../css/g/g59zbvzpy.css';
import '../../css/x/xnd0e1bra.css';
import '../../css/d/drq35p9hq.css';
import '../../css/b/bo1fk0b0e.css';
import '../../css/q/q7blsabxt.css';
import '../../css/h/h3eyfpshz.css';
import '../../css/y/y3p_g8bgu.css';
import '../../css/h/hchs68buo.css';
import '../../css/i/io03lxxxa.css';
import '../../css/j/jkaprwo_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfhvasb9y wm-shadow"/><path class="g59zbvzpy wm-k"/><path class="wm-k xnd0e1bra"/><path class="drq35p9hq wm-k"/><path class="bo1fk0b0e wm-k"/><path class="q7blsabxt wm-shine"/><path class="h3eyfpshz wm-a"/><path class="wm-a y3p_g8bgu"/><path class="hchs68buo wm-a"/><path class="io03lxxxa wm-a"/><path class="jkaprwo_m wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:case-upper"} {...others} />);
}

export default Component;
