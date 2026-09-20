import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr5ftn4xq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pr5ftn4xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:skateboard-off"} {...others} />);
}

export default Component;
