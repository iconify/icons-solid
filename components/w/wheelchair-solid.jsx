import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpqq-ve2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpqq-ve2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:wheelchair-solid"} {...others} />);
}

export default Component;
