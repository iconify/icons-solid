import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f93lqdbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f93lqdbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:wechat-fill"} {...others} />);
}

export default Component;
