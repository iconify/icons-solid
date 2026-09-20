import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7qb-gbjk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e7qb-gbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shopping-basket-add"} {...others} />);
}

export default Component;
