import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhnit_bfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhnit_bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-chevrons-down-up"} {...others} />);
}

export default Component;
