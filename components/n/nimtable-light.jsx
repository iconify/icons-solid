import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8h5bgb-m.css';
import '../../css/n/n_xpcc89w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8h5bgb-m"/><path class="n_xpcc89w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nimtable-light"} {...others} />);
}

export default Component;
