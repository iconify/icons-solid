import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6mgh21rq.css';
import '../../css/i/i1bwvyb5w.css';
import '../../css/z/z_6yhtb_m.css';
import '../../css/g/g8ojlubuv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6mgh21rq"/><circle class="i1bwvyb5w"/><circle class="z_6yhtb_m"/><path class="g8ojlubuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:hard-drive"} {...others} />);
}

export default Component;
