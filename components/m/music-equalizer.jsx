import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlzd_xg5i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jlzd_xg5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:music-equalizer"} {...others} />);
}

export default Component;
