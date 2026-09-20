import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6ost54tx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x6ost54tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:oclock-outline"} {...others} />);
}

export default Component;
