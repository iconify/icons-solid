import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sny_5xbwt.css';
import '../../css/v/vfc-bbbmi.css';
import '../../css/f/flpd0t45k.css';
import '../../css/s/sn3nb_u0r.css';
import '../../css/r/rjj64pbka.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="sny_5xbwt"/><path class="vfc-bbbmi"/><path class="flpd0t45k"/><path class="sn3nb_u0r"/><path class="rjj64pbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:saint-kitts-and-nevis"} {...others} />);
}

export default Component;
