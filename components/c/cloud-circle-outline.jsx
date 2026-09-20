import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4h578-1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4h578-1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cloud-circle-outline"} {...others} />);
}

export default Component;
