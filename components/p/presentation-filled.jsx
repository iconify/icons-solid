import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3ab64k_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3ab64k_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:presentation-filled"} {...others} />);
}

export default Component;
