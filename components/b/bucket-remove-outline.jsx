import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuwdo0nnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuwdo0nnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bucket-remove-outline"} {...others} />);
}

export default Component;
