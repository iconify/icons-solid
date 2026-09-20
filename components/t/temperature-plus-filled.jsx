import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thukg2blq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thukg2blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:temperature-plus-filled"} {...others} />);
}

export default Component;
