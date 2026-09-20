import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byucpnmmz.css';
import '../../css/c/cti5c-blj.css';
import '../../css/x/x_rnm4jqh.css';
import '../../css/u/uqt5dz12r.css';
import '../../css/w/wkba3hber.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="byucpnmmz"/><path class="cti5c-blj"/><path class="x_rnm4jqh"/><path class="uqt5dz12r"/><path class="wkba3hber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leafy-green"} {...others} />);
}

export default Component;
