import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmo-rdb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmo-rdb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:blur-radial"} {...others} />);
}

export default Component;
