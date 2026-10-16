import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1aumdb7c.css';
import '../../css/k/kw01wubkh.css';
import '../../css/w/w0gkibbsu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i1aumdb7c"/><path class="kw01wubkh"/><path class="w0gkibbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-source-20-bold"} {...others} />);
}

export default Component;
