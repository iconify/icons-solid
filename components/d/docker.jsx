import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht1y7-bwp.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="ht1y7-bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:docker"} {...others} />);
}

export default Component;
