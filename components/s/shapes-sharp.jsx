import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6gsu_bib.css';
import '../../css/h/hn50n_brq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6gsu_bib"/><path class="hn50n_brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:shapes-sharp"} {...others} />);
}

export default Component;
