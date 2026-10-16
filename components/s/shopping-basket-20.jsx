import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_cl9xend.css';
import '../../css/t/toul2psij.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v_cl9xend"/><path class="toul2psij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shopping-basket-20"} {...others} />);
}

export default Component;
