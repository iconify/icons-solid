import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f76solb2x.css';
import '../../css/u/usxvrsb_d.css';
import '../../css/u/umro_ab_l.css';
import '../../css/s/s1he6l30z.css';
import '../../css/h/hlpebobcu.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="f76solb2x"/><path class="usxvrsb_d"/><circle class="umro_ab_l"/><path class="s1he6l30z"/><circle class="hlpebobcu"/><circle class="f76solb2x"/><circle class="hlpebobcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:conference-call"} {...others} />);
}

export default Component;
