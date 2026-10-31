import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk9yzt_fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zk9yzt_fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:face-neutral-fill-round"} {...others} />);
}

export default Component;
