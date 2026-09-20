import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0tx1tbed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0tx1tbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-case-title"} {...others} />);
}

export default Component;
