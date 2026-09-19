import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-cy1ebpm.css';
import '../../css/m/miw977k3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d-cy1ebpm"/><path class="miw977k3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-box"} {...others} />);
}

export default Component;
