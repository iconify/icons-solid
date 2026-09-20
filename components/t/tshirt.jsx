import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed9732byd.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ed9732byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:tshirt"} {...others} />);
}

export default Component;
