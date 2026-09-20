import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n51x8rmhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n51x8rmhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:phone-find-line"} {...others} />);
}

export default Component;
