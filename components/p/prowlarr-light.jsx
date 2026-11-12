import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b25a24pbc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b25a24pbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prowlarr-light"} {...others} />);
}

export default Component;
