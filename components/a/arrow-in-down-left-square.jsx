import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu8duj-kd.css';
import '../../css/v/vxwbsu80r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu8duj-kd"/><path class="vxwbsu80r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-left-square"} {...others} />);
}

export default Component;
