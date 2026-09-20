import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4_xnybpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4_xnybpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:telephone-solid"} {...others} />);
}

export default Component;
