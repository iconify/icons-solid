import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvir7eh3z.css';
import '../../css/c/c4bzylu5l.css';
import '../../css/m/m3lczlbgo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uvir7eh3z"/><path class="c4bzylu5l"/><path class="m3lczlbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:genealogy"} {...others} />);
}

export default Component;
