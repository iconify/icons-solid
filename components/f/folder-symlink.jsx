import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-fu53nbh.css';
import '../../css/n/nyqw09ddw.css';
import '../../css/o/ow6s6rp_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s-fu53nbh"/><path class="nyqw09ddw"/><path class="ow6s6rp_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folder-symlink"} {...others} />);
}

export default Component;
