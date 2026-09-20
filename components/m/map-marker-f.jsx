import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5vqz06yb.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};
const content = `<path class="e5vqz06yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:map-marker-f"} {...others} />);
}

export default Component;
