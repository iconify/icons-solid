import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atmx8dpqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atmx8dpqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sailboat-line"} {...others} />);
}

export default Component;
