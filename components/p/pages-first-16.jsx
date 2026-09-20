import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aexl9kfog.css';
import '../../css/k/ka2yvjbbr.css';
import '../../css/n/nduoxyb7i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aexl9kfog"/><path class="ka2yvjbbr"/><path clip-rule="evenodd" class="nduoxyb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pages-first-16"} {...others} />);
}

export default Component;
