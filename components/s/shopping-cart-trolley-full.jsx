import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjnoqlmbw.css';
import '../../css/m/mw0oakbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjnoqlmbw"/><path class="mw0oakbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-cart-trolley-full"} {...others} />);
}

export default Component;
