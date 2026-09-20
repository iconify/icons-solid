import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv75wz1iz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tv75wz1iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mattermost-dark"} {...others} />);
}

export default Component;
