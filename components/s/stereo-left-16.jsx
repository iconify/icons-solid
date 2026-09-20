import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv1c6chiz.css';
import '../../css/y/y471xbw7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kv1c6chiz"/><path clip-rule="evenodd" class="y471xbw7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:stereo-left-16"} {...others} />);
}

export default Component;
