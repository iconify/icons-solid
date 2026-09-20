import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3rsk1bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3rsk1bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:shopping-basket"} {...others} />);
}

export default Component;
