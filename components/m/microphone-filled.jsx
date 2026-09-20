import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8mzs5o2g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o8mzs5o2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:microphone-filled"} {...others} />);
}

export default Component;
