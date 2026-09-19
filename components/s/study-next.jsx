import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csv-zmb0e.css';
import '../../css/j/j5ir4rbhy.css';
import '../../css/m/m2mxtz_ws.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="csv-zmb0e"/><path class="j5ir4rbhy"/><path class="m2mxtz_ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-next"} {...others} />);
}

export default Component;
