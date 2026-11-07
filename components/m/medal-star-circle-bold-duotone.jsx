import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eprh5acmo.css';
import '../../css/x/x0-y109_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eprh5acmo"/><path clip-rule="evenodd" class="x0-y109_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-circle-bold-duotone"} {...others} />);
}

export default Component;
