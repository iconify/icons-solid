import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klawgabfn.css';
import '../../css/e/e0z7xwbjn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="klawgabfn"/><path class="e0z7xwbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:signature"} {...others} />);
}

export default Component;
