import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6d4icc2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="x6d4icc2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:circle-large-outline"} {...others} />);
}

export default Component;
