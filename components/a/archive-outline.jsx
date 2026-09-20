import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cerp1lnii.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cerp1lnii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:archive-outline"} {...others} />);
}

export default Component;
