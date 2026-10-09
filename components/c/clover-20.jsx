import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul91wnb8h.css';
import '../../css/i/igwqjib7w.css';
import '../../css/s/sykb_fpis.css';
import '../../css/b/byjz6nbph.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ul91wnb8h"/><path class="igwqjib7w"/><path class="sykb_fpis"/><path class="byjz6nbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clover-20"} {...others} />);
}

export default Component;
