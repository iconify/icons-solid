import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdj-y3bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdj-y3bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coin-taka-filled"} {...others} />);
}

export default Component;
