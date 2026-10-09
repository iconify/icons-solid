import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvzkb_bhc.css';
import '../../css/r/rhvegq0-t.css';
import '../../css/i/i0x2txbtb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvzkb_bhc"/><path class="rhvegq0-t"/><path class="i0x2txbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-search-20-bold"} {...others} />);
}

export default Component;
