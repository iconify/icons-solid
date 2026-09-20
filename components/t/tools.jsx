import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg2pkyu3c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zg2pkyu3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:tools"} {...others} />);
}

export default Component;
