import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h36zf1bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h36zf1bkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:exchange-cny-fill"} {...others} />);
}

export default Component;
