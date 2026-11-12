import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwah2sb9a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jwah2sb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relic-storage-dark"} {...others} />);
}

export default Component;
