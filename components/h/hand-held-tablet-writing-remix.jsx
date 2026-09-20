import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uojg8ub8n.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uojg8ub8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hand-held-tablet-writing-remix"} {...others} />);
}

export default Component;
