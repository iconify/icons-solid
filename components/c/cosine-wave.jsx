import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrf6iq1zk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrf6iq1zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cosine-wave"} {...others} />);
}

export default Component;
