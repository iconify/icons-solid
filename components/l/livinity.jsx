import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh4z5kbri.css';
import '../../css/y/y2a9lnbzu.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vh4z5kbri"/><circle class="y2a9lnbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:livinity"} {...others} />);
}

export default Component;
