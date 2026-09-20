import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz-04ekur.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oz-04ekur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:table-left-header"} {...others} />);
}

export default Component;
