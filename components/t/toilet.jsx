import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/n79r-0b2c.css';
import '../../css/l/lchlphbxu.css';
import '../../css/p/pv42_gb1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4rk0GeeZ"><g class="rohhhzb0l"><path class="n79r-0b2c"/><path class="lchlphbxu"/><path class="pv42_gb1e"/></g></mask></defs><path mask="url(#SVG4rk0GeeZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:toilet"} {...others} />);
}

export default Component;
