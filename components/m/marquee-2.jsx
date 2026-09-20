import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv-4i2bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv-4i2bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:marquee-2"} {...others} />);
}

export default Component;
