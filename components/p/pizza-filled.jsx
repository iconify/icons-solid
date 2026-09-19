import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_xcrkbeg.css';
import '../../css/o/ojv9pubkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_xcrkbeg"/><path class="ojv9pubkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pizza-filled"} {...others} />);
}

export default Component;
