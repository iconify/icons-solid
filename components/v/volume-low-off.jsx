import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/w/w1_ilv.css';
import '../../css/n/n_ur3u.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGTjdugdJA"><path class="c5xdmn w1_ilv"/><path class="c5xdmn n_ur3u oxx-om"/></mask></defs><path mask="url(#SVGTjdugdJA)" class="botfzx"/><path class="c5xdmn gd_4-q n_ur3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-low-off"} {...others} />);
}

export default Component;
