import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faf4xenwi.css';
import '../../css/v/ve_vwubck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="faf4xenwi"/><path class="ve_vwubck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wapy-dev-light"} {...others} />);
}

export default Component;
