import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4zslab_c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e4zslab_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:file-word-solid"} {...others} />);
}

export default Component;
