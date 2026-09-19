import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/b/bdchsn1ab.css';
import '../../css/j/jw5oknbfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="eme4c3hbl"/><path class="bdchsn1ab"/><path class="jw5oknbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:door-handle"} {...others} />);
}

export default Component;
