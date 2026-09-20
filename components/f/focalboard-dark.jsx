import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgt-rix9a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bgt-rix9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:focalboard-dark"} {...others} />);
}

export default Component;
