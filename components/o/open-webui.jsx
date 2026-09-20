import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v922nzbhs.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bc1fd0lxe"/><path class="v922nzbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:open-webui"} {...others} />);
}

export default Component;
