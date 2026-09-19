import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7-i0pbve.css';
import '../../css/e/elle6g26i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v7-i0pbve"/><path class="elle6g26i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:flower-alt"} {...others} />);
}

export default Component;
