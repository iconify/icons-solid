import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fra1fsbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fra1fsbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:zoom-workplace"} {...others} />);
}

export default Component;
