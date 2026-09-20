import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en8xd5bmv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="en8xd5bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:ai-scanner-robot"} {...others} />);
}

export default Component;
