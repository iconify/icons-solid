import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/s/sxhkbk65k.css';
import '../../css/g/ge-l3dbkc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="sxhkbk65k"/><path class="ge-l3dbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-up-48-bold"} {...others} />);
}

export default Component;
