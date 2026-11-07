import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9h_shb9i.css';
import '../../css/u/uz30z7t_j.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9h_shb9i"/><path clip-rule="evenodd" class="uz30z7t_j"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-cog-bold"} {...others} />);
}

export default Component;
