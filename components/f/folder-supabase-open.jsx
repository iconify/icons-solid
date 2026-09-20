import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mad3lj_un.css';
import '../../css/y/ynyhw8b3u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mad3lj_un"/><path class="ynyhw8b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-supabase-open"} {...others} />);
}

export default Component;
