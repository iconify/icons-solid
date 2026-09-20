import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erj9ywj_a.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="erj9ywj_a"/><path class="ibxo5zbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raised-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
