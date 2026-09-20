import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oik3pl-qj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oik3pl-qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plexamp-dark"} {...others} />);
}

export default Component;
