import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e9re5aczb.css';
import '../../css/m/mf0_hp87d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="e9re5aczb"/><path class="mf0_hp87d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:comment-one"} {...others} />);
}

export default Component;
