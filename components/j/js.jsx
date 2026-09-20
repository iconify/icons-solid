import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da7zqbe4j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="da7zqbe4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:js"} {...others} />);
}

export default Component;
