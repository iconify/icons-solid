import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umstz1wku.css';
import '../../css/v/v43vo_b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umstz1wku"/><path class="v43vo_b9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-basket-1"} {...others} />);
}

export default Component;
