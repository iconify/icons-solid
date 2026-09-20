import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uexsjcbrl.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uexsjcbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:text-flow-rows-solid"} {...others} />);
}

export default Component;
