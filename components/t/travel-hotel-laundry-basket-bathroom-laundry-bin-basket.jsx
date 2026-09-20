import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/reku4gu6n.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="reku4gu6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-laundry-basket-bathroom-laundry-bin-basket"} {...others} />);
}

export default Component;
