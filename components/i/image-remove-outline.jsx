import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0byzj5hc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0byzj5hc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:image-remove-outline"} {...others} />);
}

export default Component;
