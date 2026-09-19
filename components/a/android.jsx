import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8uv_0b7a.css';
import '../../css/u/uh0kbz4ky.css';
import '../../css/a/a2orprfmi.css';
import '../../css/v/v2utc57qj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="s8uv_0b7a"/><path class="uh0kbz4ky"/><circle class="a2orprfmi"/><circle class="v2utc57qj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:android"} {...others} />);
}

export default Component;
