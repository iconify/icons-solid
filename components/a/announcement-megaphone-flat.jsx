import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntu5fobtp.css';
import '../../css/y/y20x_t7fb.css';
import '../../css/u/u7i3azblb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ntu5fobtp"/><path clip-rule="evenodd" class="y20x_t7fb"/><path class="u7i3azblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:announcement-megaphone-flat"} {...others} />);
}

export default Component;
