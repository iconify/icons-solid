import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_dcyk29s.css';
import '../../css/i/i3zq9bb_r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w_dcyk29s"/><path class="i3zq9bb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cursor-open-light"} {...others} />);
}

export default Component;
