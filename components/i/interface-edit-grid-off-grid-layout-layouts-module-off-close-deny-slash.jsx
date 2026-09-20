import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npxiwlb0j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="npxiwlb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-grid-off-grid-layout-layouts-module-off-close-deny-slash"} {...others} />);
}

export default Component;
