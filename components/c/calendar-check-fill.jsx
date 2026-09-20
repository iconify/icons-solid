import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_5t73owj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_5t73owj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:calendar-check-fill"} {...others} />);
}

export default Component;
