import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xas4q0rmh.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="xas4q0rmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:square"} {...others} />);
}

export default Component;
