import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egjdr5bch.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="egjdr5bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:terminal-window-stroke-12"} {...others} />);
}

export default Component;
