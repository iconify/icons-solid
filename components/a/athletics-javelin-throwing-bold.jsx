import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3num9tcq.css';
import '../../css/o/o3qegkbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3num9tcq"/><path class="o3qegkbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:athletics-javelin-throwing-bold"} {...others} />);
}

export default Component;
