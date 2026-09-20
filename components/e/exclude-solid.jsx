import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgyb_l4ec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgyb_l4ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:exclude-solid"} {...others} />);
}

export default Component;
