import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu32ykbtv.css';
import '../../css/a/aelxiub-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu32ykbtv"/><path class="aelxiub-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:whiteboard"} {...others} />);
}

export default Component;
