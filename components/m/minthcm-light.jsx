import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkdv9v2zu.css';
import '../../css/s/sa0j-91uu.css';
import '../../css/r/r04to0b6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xkdv9v2zu"/><path class="sa0j-91uu"/><path class="r04to0b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minthcm-light"} {...others} />);
}

export default Component;
