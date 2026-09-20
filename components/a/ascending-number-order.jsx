import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/y/y5mzjcb9y.css';
import '../../css/i/ig741kbet.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="y5mzjcb9y"/><path class="ig741kbet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ascending-number-order"} {...others} />);
}

export default Component;
