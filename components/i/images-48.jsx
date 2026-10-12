import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn-gj8b2k.css';
import '../../css/e/e6okdcehl.css';
import '../../css/z/zplvpsp2t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tn-gj8b2k"/><path class="e6okdcehl"/><path class="zplvpsp2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:images-48"} {...others} />);
}

export default Component;
