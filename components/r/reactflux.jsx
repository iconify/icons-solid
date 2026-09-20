import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm7ss7bki.css';
import '../../css/g/gm0rcf1lu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rm7ss7bki"/><path class="gm0rcf1lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reactflux"} {...others} />);
}

export default Component;
