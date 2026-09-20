import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnrbw7e8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnrbw7e8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:shopping-cart"} {...others} />);
}

export default Component;
