import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wme-6xfcs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wme-6xfcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mattermost-light"} {...others} />);
}

export default Component;
