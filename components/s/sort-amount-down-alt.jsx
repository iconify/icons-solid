import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe1v0h6hk.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="fe1v0h6hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:sort-amount-down-alt"} {...others} />);
}

export default Component;
