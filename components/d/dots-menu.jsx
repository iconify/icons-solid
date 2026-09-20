import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d28f5kb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d28f5kb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dots-menu"} {...others} />);
}

export default Component;
