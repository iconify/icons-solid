import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duq8th5vt.css';
import '../../css/p/pmm60ql0f.css';
import '../../css/c/c-6-aeb7i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="duq8th5vt"/><path class="pmm60ql0f"/><path class="c-6-aeb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:holyarrs-dark"} {...others} />);
}

export default Component;
