import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol9yrdunc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ol9yrdunc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:valhalla-maps-light"} {...others} />);
}

export default Component;
