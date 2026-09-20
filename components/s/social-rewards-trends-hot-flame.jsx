import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnt8-f7wi.css';
import '../../css/g/gnytiu9gs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bnt8-f7wi"/><path class="gnytiu9gs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-trends-hot-flame"} {...others} />);
}

export default Component;
