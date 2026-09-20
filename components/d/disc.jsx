import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu23libwc.css';
import '../../css/a/at1afwblx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pu23libwc"/><path class="at1afwblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:disc"} {...others} />);
}

export default Component;
