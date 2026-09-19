import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vkjbvwbld.css';
import '../../css/v/vw9h3sbzb.css';
import '../../css/z/zs6rexpdd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRV4b4dqK"><g class="ufeehvblu"><path class="vkjbvwbld"/><rect class="vw9h3sbzb"/><path class="zs6rexpdd"/></g></mask></defs><path mask="url(#SVGRV4b4dqK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:camera"} {...others} />);
}

export default Component;
