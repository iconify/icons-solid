import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uucrl1b5x.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="uucrl1b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:compress-arrows-alt"} {...others} />);
}

export default Component;
