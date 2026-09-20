import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz4r9rwwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz4r9rwwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:discount-percent-fill"} {...others} />);
}

export default Component;
