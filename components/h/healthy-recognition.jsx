import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/salz-edul.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="salz-edul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:healthy-recognition"} {...others} />);
}

export default Component;
