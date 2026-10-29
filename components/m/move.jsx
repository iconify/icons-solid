import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd-_aub3g.css';
import '../../css/f/fss4rybej.css';
import '../../css/i/ia58y6bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dd-_aub3g wm-k"/><path class="fss4rybej wm-a"/><path class="ia58y6bdf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:move"} {...others} />);
}

export default Component;
