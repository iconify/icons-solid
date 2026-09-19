import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz4wp-bec.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lz4wp-bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:punctuation-check"} {...others} />);
}

export default Component;
