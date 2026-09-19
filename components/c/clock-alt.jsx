import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8n0csb6f.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="a8n0csb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:clock-alt"} {...others} />);
}

export default Component;
