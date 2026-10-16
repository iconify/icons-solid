import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soauwjbuz.css';
import '../../css/x/xqe1shbes.css';
import '../../css/w/wp_1hutrl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="soauwjbuz"/><path class="xqe1shbes"/><path class="wp_1hutrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-holder-20-bold"} {...others} />);
}

export default Component;
