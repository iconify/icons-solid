import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw-n8ebic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fw-n8ebic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shopping-bag-fill"} {...others} />);
}

export default Component;
