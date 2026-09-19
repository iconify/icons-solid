import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/n/n95gqt_fs.css';
import '../../css/v/vt616c4jv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><path class="n95gqt_fs"/><path class="vt616c4jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:three-hexagons"} {...others} />);
}

export default Component;
