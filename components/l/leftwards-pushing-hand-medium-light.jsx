import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwtadbgg.css';
import '../../css/b/bvxaztjgk.css';
import '../../css/b/b2wzlvbtv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="snwtadbgg"/><path class="bvxaztjgk"/><path class="b2wzlvbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:leftwards-pushing-hand-medium-light"} {...others} />);
}

export default Component;
