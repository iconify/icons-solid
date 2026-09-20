import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuy3je-si.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuy3je-si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-horizontal-space-between-sharp"} {...others} />);
}

export default Component;
