import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ck9ukgx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="e7ck9ukgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:stairs-1-solid"} {...others} />);
}

export default Component;
