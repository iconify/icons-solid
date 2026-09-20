import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqy0o8b5k.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="hqy0o8b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:boot"} {...others} />);
}

export default Component;
