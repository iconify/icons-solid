import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xupgi1b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xupgi1b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:victron-energy"} {...others} />);
}

export default Component;
