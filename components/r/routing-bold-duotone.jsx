import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6j569bdk.css';
import '../../css/l/l9hde_zgu.css';
import '../../css/b/bvzc07axr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6j569bdk"/><path class="l9hde_zgu"/><path class="bvzc07axr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-bold-duotone"} {...others} />);
}

export default Component;
