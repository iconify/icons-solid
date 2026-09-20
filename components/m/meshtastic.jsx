import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqspvlzll.css';
import '../../css/s/sppq3wb1p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gqspvlzll"/><path class="sppq3wb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:meshtastic"} {...others} />);
}

export default Component;
