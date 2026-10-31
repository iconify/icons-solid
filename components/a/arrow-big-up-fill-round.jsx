import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/che1q43ri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="che1q43ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-up-fill-round"} {...others} />);
}

export default Component;
