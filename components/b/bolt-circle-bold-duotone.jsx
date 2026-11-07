import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/x/xlt2fc9tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path class="xlt2fc9tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bolt-circle-bold-duotone"} {...others} />);
}

export default Component;
