import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs4nodbts.css';
import '../../css/g/gy2cg1ook.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs4nodbts"/><path class="gy2cg1ook"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barrel-20"} {...others} />);
}

export default Component;
