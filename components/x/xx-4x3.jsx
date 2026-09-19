import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-k5ywbsm.css';
import '../../css/a/a1j4qjn6o.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="x-k5ywbsm"/><path class="a1j4qjn6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:xx-4x3"} {...others} />);
}

export default Component;
