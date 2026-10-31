import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ogek_ebbg.css';
import '../../css/i/i4hticcmy.css';
import '../../css/r/rw5uikbiu.css';
import '../../css/v/vrk89p09o.css';
import '../../css/e/eopxrhb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ogek_ebbg wm-shadow"/><path class="i4hticcmy wm-shadow"/><path class="rw5uikbiu"/><path class="vrk89p09o"/><path class="eopxrhb4v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mosque"} {...others} />);
}

export default Component;
