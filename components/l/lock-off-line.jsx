import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v19d-t26v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v19d-t26v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:lock-off-line"} {...others} />);
}

export default Component;
