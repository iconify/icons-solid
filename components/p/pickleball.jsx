import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh1r0w9jv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vh1r0w9jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:pickleball"} {...others} />);
}

export default Component;
