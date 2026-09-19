import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssbjp9b9f.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/n/nge6tfbxp.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ssbjp9b9f"/><circle class="e39ud6bwf"/><circle class="nge6tfbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:overflow-menu-vertical"} {...others} />);
}

export default Component;
