import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcv7dgnpo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tcv7dgnpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hdhomerun-light"} {...others} />);
}

export default Component;
