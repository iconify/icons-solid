import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skg5yh4xo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skg5yh4xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-open-outline"} {...others} />);
}

export default Component;
