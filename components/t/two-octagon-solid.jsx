import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6fgm95al.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6fgm95al"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:two-octagon-solid"} {...others} />);
}

export default Component;
