import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp_ciybgk.css';
import '../../css/k/k-_lh2bbh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mp_ciybgk"/><path class="k-_lh2bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:database-fill-20"} {...others} />);
}

export default Component;
