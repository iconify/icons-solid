import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0bnbwbel.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="l0bnbwbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:time-two-filled"} {...others} />);
}

export default Component;
