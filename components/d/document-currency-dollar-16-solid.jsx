import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7_-kbcvl.css';
import '../../css/d/dqlj_tyvf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h7_-kbcvl"/><path clip-rule="evenodd" class="dqlj_tyvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-currency-dollar-16-solid"} {...others} />);
}

export default Component;
