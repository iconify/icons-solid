import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/x/xfqw0ccwv.css';
import '../../css/b/blnj68bzt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="xfqw0ccwv"/><path class="blnj68bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:fahrenheit"} {...others} />);
}

export default Component;
