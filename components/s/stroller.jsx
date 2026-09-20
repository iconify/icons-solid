import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on6e2sbfd.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="on6e2sbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:stroller"} {...others} />);
}

export default Component;
