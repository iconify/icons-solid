import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw8qkhr5t.css';
import '../../css/w/wt0hjgbht.css';
import '../../css/k/kuycmfbxw.css';
import '../../css/a/aljyvwb8e.css';
import '../../css/h/hv37hybeo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="iw8qkhr5t"/><path class="wt0hjgbht"/><path class="kuycmfbxw"/><path class="aljyvwb8e"/><path class="hv37hybeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:first-aid-bag"} {...others} />);
}

export default Component;
