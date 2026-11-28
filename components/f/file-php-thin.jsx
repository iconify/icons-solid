import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl5p5ob0t.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="xl5p5ob0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:file-php-thin"} {...others} />);
}

export default Component;
