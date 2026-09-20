import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow0e6s8yt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow0e6s8yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:passbolt-dark"} {...others} />);
}

export default Component;
