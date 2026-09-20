import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm3u3j5lh.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="gm3u3j5lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:alert-box"} {...others} />);
}

export default Component;
