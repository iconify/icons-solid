import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m68lqw2ts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m68lqw2ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rear-windshield-defroster-fill"} {...others} />);
}

export default Component;
