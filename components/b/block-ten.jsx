import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/d/d70u10bbk.css';
import '../../css/d/dov8vg2gk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><path class="d70u10bbk"/><path class="dov8vg2gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:block-ten"} {...others} />);
}

export default Component;
