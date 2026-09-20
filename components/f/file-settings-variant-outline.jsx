import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9r_w_bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9r_w_bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-settings-variant-outline"} {...others} />);
}

export default Component;
