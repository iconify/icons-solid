import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwa2j_kng.css';
import '../../css/c/cwd0g7-xm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pwa2j_kng"/><path class="cwd0g7-xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:large-intestine"} {...others} />);
}

export default Component;
