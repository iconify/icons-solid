import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj-clbd9z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qj-clbd9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wpressr"} {...others} />);
}

export default Component;
