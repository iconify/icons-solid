import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cem9-c3jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cem9-c3jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-down-linear"} {...others} />);
}

export default Component;
