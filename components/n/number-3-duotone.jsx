import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e442e8d9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e442e8d9k primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-3-duotone"} {...others} />);
}

export default Component;
