import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkygdid_m.css';
import '../../css/z/z2ukw-u9z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wkygdid_m"/><path class="z2ukw-u9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:triangular-flag"} {...others} />);
}

export default Component;
