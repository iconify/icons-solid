import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iarzmjb8m.css';
import '../../css/g/ge7vrqbtr.css';
import '../../css/l/lxq4dhkod.css';
import '../../css/s/s2-2a1b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iarzmjb8m"/><path clip-rule="evenodd" class="ge7vrqbtr"/><path class="lxq4dhkod"/><path clip-rule="evenodd" class="s2-2a1b2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-bold"} {...others} />);
}

export default Component;
