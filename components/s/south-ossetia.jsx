import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-ifwcixz.css';
import '../../css/y/y60soueiq.css';
import '../../css/v/v2da_1baj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="h-ifwcixz"/><path class="y60soueiq"/><path class="v2da_1baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:south-ossetia"} {...others} />);
}

export default Component;
