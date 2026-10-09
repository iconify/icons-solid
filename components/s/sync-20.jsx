import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-ilkisjd.css';
import '../../css/n/n-b_rl70t.css';
import '../../css/s/s8zhrbi_x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-ilkisjd"/><path class="n-b_rl70t"/><path class="s8zhrbi_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sync-20"} {...others} />);
}

export default Component;
