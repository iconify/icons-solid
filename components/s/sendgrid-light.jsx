import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsjcdtb3y.css';
import '../../css/s/s6s6d1bvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nsjcdtb3y"/><path class="s6s6d1bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sendgrid-light"} {...others} />);
}

export default Component;
