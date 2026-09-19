import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edzw4y5pf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="edzw4y5pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:football"} {...others} />);
}

export default Component;
