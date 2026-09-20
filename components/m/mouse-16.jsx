import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1er3c68j.css';
import '../../css/d/dmrek5bey.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j1er3c68j"/><path clip-rule="evenodd" class="dmrek5bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mouse-16"} {...others} />);
}

export default Component;
