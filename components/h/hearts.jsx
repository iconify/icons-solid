import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa_3u8ean.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="aa_3u8ean"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:hearts"} {...others} />);
}

export default Component;
