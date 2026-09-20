import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxtfc9b1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxtfc9b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:folder-expand-all"} {...others} />);
}

export default Component;
