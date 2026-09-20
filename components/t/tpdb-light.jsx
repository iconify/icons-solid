import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moj3q8fhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="moj3q8fhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tpdb-light"} {...others} />);
}

export default Component;
