import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsallabfa.css';
import '../../css/h/hc04_ac_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xsallabfa"/><path clip-rule="evenodd" class="hc04_ac_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mastodon-16"} {...others} />);
}

export default Component;
