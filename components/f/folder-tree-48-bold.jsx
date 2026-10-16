import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cws-8tb1t.css';
import '../../css/a/aktl5czru.css';
import '../../css/m/m86vp2brb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cws-8tb1t"/><path class="aktl5czru"/><path class="m86vp2brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-tree-48-bold"} {...others} />);
}

export default Component;
