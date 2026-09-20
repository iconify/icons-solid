import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub_swd5sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub_swd5sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:playlist-off"} {...others} />);
}

export default Component;
