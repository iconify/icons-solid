import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4v6-fb8r.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="c4v6-fb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:customer-support-1"} {...others} />);
}

export default Component;
