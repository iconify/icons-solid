import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-h5b6a8z.css';
import '../../css/m/mqn54kwig.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-h5b6a8z"/><path class="mqn54kwig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:operational"} {...others} />);
}

export default Component;
