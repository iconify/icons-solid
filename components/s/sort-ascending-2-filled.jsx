import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kke7zvbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kke7zvbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-ascending-2-filled"} {...others} />);
}

export default Component;
