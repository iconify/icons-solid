import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nih4i_b-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nih4i_b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:monitor-info"} {...others} />);
}

export default Component;
