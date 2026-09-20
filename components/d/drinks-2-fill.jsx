import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk7w1m6ao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk7w1m6ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:drinks-2-fill"} {...others} />);
}

export default Component;
