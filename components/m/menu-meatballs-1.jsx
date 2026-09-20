import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozn0_bc3j.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="ozn0_bc3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:menu-meatballs-1"} {...others} />);
}

export default Component;
