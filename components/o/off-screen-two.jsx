import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzrk6-7wu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gzrk6-7wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:off-screen-two"} {...others} />);
}

export default Component;
