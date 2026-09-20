import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3ti3obmt.css';
import '../../css/m/mef0poblo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k3ti3obmt"/><path class="mef0poblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wavy-dash"} {...others} />);
}

export default Component;
