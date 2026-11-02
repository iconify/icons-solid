import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb7-6ib7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb7-6ib7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:equal-fill"} {...others} />);
}

export default Component;
