import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vobn2vo6z.css';

const viewBox = {"width":304,"height":472};
const content = `<path class="vobn2vo6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:android-alt"} {...others} />);
}

export default Component;
