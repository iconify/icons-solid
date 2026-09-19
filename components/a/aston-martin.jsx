import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xen0-cbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xen0-cbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aston-martin"} {...others} />);
}

export default Component;
