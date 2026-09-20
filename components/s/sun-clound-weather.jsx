import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/m/mgi9p2hvu.css';
import '../../css/a/ap0jw-bid.css';
import '../../css/a/a4is-4piq.css';
import '../../css/t/tmjxwmg5h.css';
import '../../css/p/pnw7a002c.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="mgi9p2hvu"/><path class="ap0jw-bid"/><path class="a4is-4piq"/><path class="tmjxwmg5h"/><path class="pnw7a002c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:sun-clound-weather"} {...others} />);
}

export default Component;
