import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d91b1m4xa.css';
import '../../css/d/deymd5jrm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d91b1m4xa"/><path class="deymd5jrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:external-link-16"} {...others} />);
}

export default Component;
