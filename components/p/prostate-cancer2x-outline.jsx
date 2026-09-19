import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzmbhfb8x.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="zzmbhfb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:prostate-cancer2x-outline"} {...others} />);
}

export default Component;
