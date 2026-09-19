import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk2c95-jo.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="wk2c95-jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mayanpyramid"} {...others} />);
}

export default Component;
