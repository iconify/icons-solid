import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu56ovb5t.css';
import '../../css/x/x8f5lbcvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu56ovb5t"/><path class="x8f5lbcvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:lock-square-fill"} {...others} />);
}

export default Component;
