import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-7j0sgsx.css';
import '../../css/b/bmmy7ztjn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-7j0sgsx"/><path class="bmmy7ztjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-lightning-bolt-stroke-20"} {...others} />);
}

export default Component;
