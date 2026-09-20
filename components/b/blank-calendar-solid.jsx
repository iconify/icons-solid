import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3il3ycro.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="e3il3ycro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:blank-calendar-solid"} {...others} />);
}

export default Component;
