import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-jq4rd8c.css';
import '../../css/x/x1vncw3xi.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s-jq4rd8c"/><path class="x1vncw3xi"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tag-plus-20"} {...others} />);
}

export default Component;
