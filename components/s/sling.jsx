import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnc0q-9gr.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jnc0q-9gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sling"} {...others} />);
}

export default Component;
