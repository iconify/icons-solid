import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f00lv-bek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f00lv-bek primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:refresh-duotone"} {...others} />);
}

export default Component;
