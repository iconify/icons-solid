import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4qvdaclo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4qvdaclo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-size-decrease-fill-round"} {...others} />);
}

export default Component;
