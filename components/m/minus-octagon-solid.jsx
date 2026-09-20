import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1_2t6b9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1_2t6b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:minus-octagon-solid"} {...others} />);
}

export default Component;
