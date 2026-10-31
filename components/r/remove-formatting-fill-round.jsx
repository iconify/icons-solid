import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt3ij9b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt3ij9b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:remove-formatting-fill-round"} {...others} />);
}

export default Component;
