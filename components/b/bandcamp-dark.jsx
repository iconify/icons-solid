import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnm-5gseg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rnm-5gseg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bandcamp-dark"} {...others} />);
}

export default Component;
