import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um232xbll.css';
import '../../css/k/k77-kcbrm.css';
import '../../css/k/k9qkfnbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="um232xbll"/><path class="k77-kcbrm"/><path class="k9qkfnbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-size-48"} {...others} />);
}

export default Component;
