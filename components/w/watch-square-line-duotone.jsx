import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/myadmx7_t.css';
import '../../css/b/bla5adw6g.css';
import '../../css/g/g9v60on3f.css';
import '../../css/s/sc93_2j6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="myadmx7_t"/><path class="bla5adw6g"/><path class="g9v60on3f"/><path class="sc93_2j6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-line-duotone"} {...others} />);
}

export default Component;
