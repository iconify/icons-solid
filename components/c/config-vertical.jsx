import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae4p8ufye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae4p8ufye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:config-vertical"} {...others} />);
}

export default Component;
