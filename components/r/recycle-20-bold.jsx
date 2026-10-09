import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq7te71sv.css';
import '../../css/f/fr4uueuzf.css';
import '../../css/w/wgoa5abtu.css';
import '../../css/e/e7r812b2s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bq7te71sv"/><path class="fr4uueuzf"/><path class="wgoa5abtu"/><path class="e7r812b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycle-20-bold"} {...others} />);
}

export default Component;
