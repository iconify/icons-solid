import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prx7lif2h.css';
import '../../css/f/frcg4lb0l.css';
import '../../css/p/p49af0jnm.css';
import '../../css/n/nop-2-bbz.css';
import '../../css/a/aodnd8bbq.css';
import '../../css/l/l_qxvvong.css';
import '../../css/f/fm5gmibbe.css';
import '../../css/u/ul99_-btl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prx7lif2h wm-shadow"/><path class="frcg4lb0l wm-k"/><path class="p49af0jnm wm-k"/><path class="nop-2-bbz wm-k"/><path class="aodnd8bbq wm-k"/><path class="l_qxvvong wm-k"/><path class="fm5gmibbe wm-shine"/><path class="ul99_-btl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:square-x"} {...others} />);
}

export default Component;
