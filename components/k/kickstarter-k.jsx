import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw31-9b4z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qw31-9b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:kickstarter-k"} {...others} />);
}

export default Component;
