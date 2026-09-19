import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if3aotbfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="if3aotbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:themeisle"} {...others} />);
}

export default Component;
