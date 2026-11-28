import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wms6fp07h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wms6fp07h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:chart-increasing"} {...others} />);
}

export default Component;
