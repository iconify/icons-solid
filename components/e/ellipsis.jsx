import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x55li5b5o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x55li5b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:ellipsis"} {...others} />);
}

export default Component;
