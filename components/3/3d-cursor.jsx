import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l322akb3h.css';
import '../../css/j/j6u729bhy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l322akb3h"/><path class="j6u729bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-cursor"} {...others} />);
}

export default Component;
