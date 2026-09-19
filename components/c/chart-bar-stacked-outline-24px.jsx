import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh-ng8b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dh-ng8b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-bar-stacked-outline-24px"} {...others} />);
}

export default Component;
