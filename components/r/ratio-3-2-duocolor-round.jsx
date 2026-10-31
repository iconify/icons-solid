import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7gafosax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7gafosax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-3-2-duocolor-round"} {...others} />);
}

export default Component;
