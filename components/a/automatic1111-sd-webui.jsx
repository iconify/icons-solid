import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu1nzsbzn.css';
import '../../css/s/sa4jm9bar.css';
import '../../css/r/r6g18ui6h.css';
import '../../css/g/g-dt7yb-t.css';
import '../../css/x/xeqhmjlyj.css';
import '../../css/a/a_vt27b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fu1nzsbzn"><path class="sa4jm9bar"/><path class="r6g18ui6h"/><path class="g-dt7yb-t"/><path class="xeqhmjlyj"/><path class="a_vt27b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:automatic1111-sd-webui"} {...others} />);
}

export default Component;
