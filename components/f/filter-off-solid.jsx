import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt6hc6pgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt6hc6pgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:filter-off-solid"} {...others} />);
}

export default Component;
