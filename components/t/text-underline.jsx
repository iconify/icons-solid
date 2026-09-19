import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/b/bnjyhac1n.css';
import '../../css/n/nbslokeii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="bnjyhac1n"/><path class="nbslokeii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-underline"} {...others} />);
}

export default Component;
