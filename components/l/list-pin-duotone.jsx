import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l00os67mc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l00os67mc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-pin-duotone"} {...others} />);
}

export default Component;
