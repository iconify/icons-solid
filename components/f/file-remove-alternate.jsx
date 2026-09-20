import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3wdki6vq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y3wdki6vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:file-remove-alternate"} {...others} />);
}

export default Component;
