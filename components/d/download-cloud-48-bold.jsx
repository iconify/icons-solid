import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbb-tygif.css';
import '../../css/i/iry5se_sq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bbb-tygif"/><path class="iry5se_sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-cloud-48-bold"} {...others} />);
}

export default Component;
