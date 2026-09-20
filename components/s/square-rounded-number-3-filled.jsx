import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynah5zt6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynah5zt6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-number-3-filled"} {...others} />);
}

export default Component;
