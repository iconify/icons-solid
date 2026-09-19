import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_g_psdmk.css';
import '../../css/j/ji90m8bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="r_g_psdmk"/><path class="ji90m8bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:card-view-small-filled"} {...others} />);
}

export default Component;
