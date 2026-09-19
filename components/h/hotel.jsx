import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0_uobbtg.css';
import '../../css/u/ussqqxbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="r0_uobbtg"/><path class="ussqqxbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:hotel"} {...others} />);
}

export default Component;
