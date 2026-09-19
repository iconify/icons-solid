import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyvy0x6vz.css';
import '../../css/n/nh4ls7l6o.css';
import '../../css/f/f_tbp8boy.css';

const viewBox = {"width":16,"height":16};
const content = `<ellipse class="fyvy0x6vz"/><ellipse class="nh4ls7l6o"/><path class="f_tbp8boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:bicep"} {...others} />);
}

export default Component;
