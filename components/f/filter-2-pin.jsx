import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/but20cbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="but20cbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filter-2-pin"} {...others} />);
}

export default Component;
