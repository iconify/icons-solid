import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_5qyi-gg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_5qyi-gg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seelf-dark"} {...others} />);
}

export default Component;
