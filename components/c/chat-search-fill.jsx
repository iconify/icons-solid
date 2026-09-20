import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmpu4c7qp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmpu4c7qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-search-fill"} {...others} />);
}

export default Component;
