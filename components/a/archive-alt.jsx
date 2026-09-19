import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjxrqjgru.css';
import '../../css/a/ads37eh-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjxrqjgru"/><path class="ads37eh-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:archive-alt"} {...others} />);
}

export default Component;
