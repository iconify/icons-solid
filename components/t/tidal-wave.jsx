import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct-i0ab8g.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ct-i0ab8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tidal-wave"} {...others} />);
}

export default Component;
