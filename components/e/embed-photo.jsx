import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7_z7-b2d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f7_z7-b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:embed-photo"} {...others} />);
}

export default Component;
