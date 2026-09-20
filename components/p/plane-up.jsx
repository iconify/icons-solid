import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhhhj_z0d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vhhhj_z0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-up"} {...others} />);
}

export default Component;
