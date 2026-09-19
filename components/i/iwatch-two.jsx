import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cor9hjbch.css';
import '../../css/l/lhlk6yb8p.css';
import '../../css/k/kpcmyzith.css';
import '../../css/u/u8nd0acfe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cor9hjbch"/><rect class="lhlk6yb8p"/><rect transform="rotate(90 13 18)" class="kpcmyzith"/><rect transform="rotate(90 13 25)" class="u8nd0acfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:iwatch-two"} {...others} />);
}

export default Component;
