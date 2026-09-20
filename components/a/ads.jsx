import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ieuuixy1o.css';
import '../../css/m/m1si3hbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ieuuixy1o"/><path class="m1si3hbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ads"} {...others} />);
}

export default Component;
