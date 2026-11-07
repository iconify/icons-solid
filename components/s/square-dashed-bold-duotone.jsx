import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2sk80bby.css';
import '../../css/f/fbnpbdb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2sk80bby"/><path class="fbnpbdb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dashed-bold-duotone"} {...others} />);
}

export default Component;
