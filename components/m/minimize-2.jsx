import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-c2kjb1l.css';
import '../../css/i/ils9n7g9i.css';
import '../../css/t/tolqikb-l.css';
import '../../css/t/tnhufabrj.css';
import '../../css/c/cgm_0qs_n.css';
import '../../css/p/plwejqbby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-c2kjb1l wm-shadow"/><path class="ils9n7g9i wm-k"/><path class="tolqikb-l wm-k"/><path class="tnhufabrj wm-k"/><path class="cgm_0qs_n wm-k"/><path class="plwejqbby wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:minimize-2"} {...others} />);
}

export default Component;
