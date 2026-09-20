import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckex8b9yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckex8b9yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-basket-sharp"} {...others} />);
}

export default Component;
