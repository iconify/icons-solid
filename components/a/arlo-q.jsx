import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo6jg5d0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo6jg5d0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:arlo-q"} {...others} />);
}

export default Component;
