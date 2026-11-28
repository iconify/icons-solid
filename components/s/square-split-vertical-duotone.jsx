import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4mgdvbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4mgdvbnm primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-vertical-duotone"} {...others} />);
}

export default Component;
