import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7hsztbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7hsztbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-3-fill-round"} {...others} />);
}

export default Component;
