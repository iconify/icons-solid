import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5j6f3bay.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i5j6f3bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:fish4-very-sad"} {...others} />);
}

export default Component;
