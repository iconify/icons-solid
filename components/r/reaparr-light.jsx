import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz646ky1a.css';
import '../../css/a/aucdcts6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dz646ky1a"/><path class="aucdcts6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reaparr-light"} {...others} />);
}

export default Component;
