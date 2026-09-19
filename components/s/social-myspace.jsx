import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixzsp0vky.css';
import '../../css/m/mup4fgbbf.css';
import '../../css/v/vo89kwbtj.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ixzsp0vky"/><ellipse class="mup4fgbbf"/><path class="vo89kwbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-myspace"} {...others} />);
}

export default Component;
