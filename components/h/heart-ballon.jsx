import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb4fn3bdi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nb4fn3bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:heart-ballon"} {...others} />);
}

export default Component;
