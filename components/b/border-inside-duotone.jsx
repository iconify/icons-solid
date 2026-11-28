import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm4ku1vqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jm4ku1vqw primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:border-inside-duotone"} {...others} />);
}

export default Component;
