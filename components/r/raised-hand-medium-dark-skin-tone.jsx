import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g712a07tq.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g712a07tq"/><path class="ibxo5zbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raised-hand-medium-dark-skin-tone"} {...others} />);
}

export default Component;
