import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg5zy3b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bg5zy3b5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:route-off"} {...others} />);
}

export default Component;
