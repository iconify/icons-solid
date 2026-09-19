import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfsbn3c_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfsbn3c_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:reolink-811"} {...others} />);
}

export default Component;
