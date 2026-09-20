import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukbu8n6kt.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ukbu8n6kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:landscape"} {...others} />);
}

export default Component;
