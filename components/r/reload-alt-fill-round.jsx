import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gea0704lq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gea0704lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reload-alt-fill-round"} {...others} />);
}

export default Component;
