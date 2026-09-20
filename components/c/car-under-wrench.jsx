import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6r3qlnuf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o6r3qlnuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-under-wrench"} {...others} />);
}

export default Component;
