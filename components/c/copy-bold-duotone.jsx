import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwfa9_-5x.css';
import '../../css/m/mtplmt03a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cwfa9_-5x"/><path class="mtplmt03a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-bold-duotone"} {...others} />);
}

export default Component;
