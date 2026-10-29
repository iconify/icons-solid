import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yko8klxft.css';
import '../../css/z/zjvivh4ag.css';
import '../../css/f/fg72kubvl.css';
import '../../css/v/vmvmppbhb.css';
import '../../css/c/czch8qbls.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yko8klxft"/><path class="zjvivh4ag"/><path class="fg72kubvl"/><path class="vmvmppbhb"/><path class="czch8qbls wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:infinity"} {...others} />);
}

export default Component;
