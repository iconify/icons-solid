import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytre_iyqf.css';
import '../../css/a/aqm8hp2ux.css';
import '../../css/a/a6d6nheff.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ytre_iyqf"/><path class="aqm8hp2ux"/><path class="a6d6nheff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milk-carton-48"} {...others} />);
}

export default Component;
