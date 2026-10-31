import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx9z-d2ap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx9z-d2ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:star-fill-round"} {...others} />);
}

export default Component;
