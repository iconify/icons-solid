import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg1-4zbux.css';
import '../../css/y/yg-vkub-j.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="lg1-4zbux"/><path class="yg-vkub-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hermesseg"} {...others} />);
}

export default Component;
