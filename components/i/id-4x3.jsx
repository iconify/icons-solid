import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-5uilbhv.css';
import '../../css/i/i2ddjlrtk.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="m-5uilbhv"/><path class="i2ddjlrtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:id-4x3"} {...others} />);
}

export default Component;
