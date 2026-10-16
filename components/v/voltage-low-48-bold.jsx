import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9leiv1ic.css';
import '../../css/n/ndcyp2oof.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g9leiv1ic"/><path class="ndcyp2oof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-low-48-bold"} {...others} />);
}

export default Component;
