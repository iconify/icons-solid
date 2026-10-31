import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej9n68bqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ej9n68bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-16-9-duocolor-round"} {...others} />);
}

export default Component;
