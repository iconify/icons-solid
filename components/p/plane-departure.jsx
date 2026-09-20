import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn51s86hr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cn51s86hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:plane-departure"} {...others} />);
}

export default Component;
