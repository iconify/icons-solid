import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb4sskw9l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cb4sskw9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:camera-slash-16-solid"} {...others} />);
}

export default Component;
