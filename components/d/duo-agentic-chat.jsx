import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc8ang44w.css';
import '../../css/e/eh-2z7b3c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pc8ang44w"/><path class="eh-2z7b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:duo-agentic-chat"} {...others} />);
}

export default Component;
