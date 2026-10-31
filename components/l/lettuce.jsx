import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgdg-uoaj.css';
import '../../css/o/odkq52bqx.css';
import '../../css/f/fz9ss0b0g.css';
import '../../css/z/zu8mp8bfd.css';
import '../../css/c/cjknrwpse.css';
import '../../css/c/cm7azwbmb.css';
import '../../css/v/veh62vb5r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zgdg-uoaj"/><path class="odkq52bqx"/><path class="fz9ss0b0g"/><path class="zu8mp8bfd"/><path class="cjknrwpse"/><path class="cm7azwbmb"/><path class="veh62vb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:lettuce"} {...others} />);
}

export default Component;
