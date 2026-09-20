import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9l4y-1ri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9l4y-1ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-x"} {...others} />);
}

export default Component;
