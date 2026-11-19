import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mf6xtjb9g.css';
import '../../css/x/x3__3mamu.css';
import '../../css/k/kn4p2c-tz.css';
import '../../css/y/y1njv_beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mf6xtjb9g"/><path class="x3__3mamu"/><path class="kn4p2c-tz"/><path class="y1njv_beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:creative-commons-remix"} {...others} />);
}

export default Component;
