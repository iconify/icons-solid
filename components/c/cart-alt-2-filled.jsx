import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru0p89b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru0p89b1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cart-alt-2-filled"} {...others} />);
}

export default Component;
