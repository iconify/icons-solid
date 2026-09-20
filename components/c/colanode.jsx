import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkcxuhb8p.css';
import '../../css/k/ky_bo_oah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rkcxuhb8p"/><path class="ky_bo_oah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colanode"} {...others} />);
}

export default Component;
