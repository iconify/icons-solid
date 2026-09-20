import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fom46j_ot.css';
import '../../css/e/en5_3bbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fom46j_ot"/><path class="en5_3bbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mentioned-filled"} {...others} />);
}

export default Component;
