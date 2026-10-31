import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi2hnbb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi2hnbb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radiation-fill-round"} {...others} />);
}

export default Component;
