import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqfj8n7ce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqfj8n7ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:drag"} {...others} />);
}

export default Component;
