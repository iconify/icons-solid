import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q9vx7bmpi.css';
import '../../css/u/um-w57aip.css';
import '../../css/k/k06x6sb9r.css';
import '../../css/e/e2hbqg24t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q9vx7bmpi wm-shadow"/><path class="um-w57aip wm-shadow"/><path class="k06x6sb9r"/><path class="e2hbqg24t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:panel-bottom"} {...others} />);
}

export default Component;
