import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6qe8n8xj.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="f6qe8n8xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:css-fill-12"} {...others} />);
}

export default Component;
