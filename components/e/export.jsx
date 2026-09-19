import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj-g8ac3z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dj-g8ac3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:export"} {...others} />);
}

export default Component;
