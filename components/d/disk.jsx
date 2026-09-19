import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw96a2bzf.css';
import '../../css/w/wqd1ubbic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer gw96a2bzf"/><path class="duoicon-primary-layer wqd1ubbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:disk"} {...others} />);
}

export default Component;
