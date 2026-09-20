import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtz_hcc5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rtz_hcc5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-bold"} {...others} />);
}

export default Component;
