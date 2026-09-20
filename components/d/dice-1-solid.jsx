import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzkzy7e_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzkzy7e_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dice-1-solid"} {...others} />);
}

export default Component;
