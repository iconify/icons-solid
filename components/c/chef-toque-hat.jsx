import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wei0kabfr.css';
import '../../css/f/fzclu0grq.css';
import '../../css/p/p36qdbmvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wei0kabfr"/><path class="fzclu0grq"/><path class="p36qdbmvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chef-toque-hat"} {...others} />);
}

export default Component;
