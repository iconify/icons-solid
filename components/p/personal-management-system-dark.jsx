import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr964_uzt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yr964_uzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:personal-management-system-dark"} {...others} />);
}

export default Component;
