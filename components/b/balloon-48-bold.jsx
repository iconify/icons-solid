import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed93ssb8t.css';
import '../../css/u/u-r_1idsq.css';
import '../../css/f/fcjo0ib-l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ed93ssb8t"/><path class="u-r_1idsq"/><path class="fcjo0ib-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balloon-48-bold"} {...others} />);
}

export default Component;
