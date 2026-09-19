import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jzwzpccov.css';
import '../../css/m/mza0vib7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jzwzpccov"/><path class="mza0vib7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stickers"} {...others} />);
}

export default Component;
