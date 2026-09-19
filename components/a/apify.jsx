import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq1_nmbap.css';
import '../../css/v/vd0yurcnj.css';
import '../../css/w/wgnfps2so.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uq1_nmbap"/><path class="vd0yurcnj"/><path class="wgnfps2so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:apify"} {...others} />);
}

export default Component;
