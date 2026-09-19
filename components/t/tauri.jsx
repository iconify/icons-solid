import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqhp__bzd.css';
import '../../css/o/oqawcacrr.css';
import '../../css/b/bwplvcc-j.css';
import '../../css/r/rcxx25bud.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vqhp__bzd"/><path class="oqawcacrr"/><path class="bwplvcc-j"/><path class="rcxx25bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tauri"} {...others} />);
}

export default Component;
