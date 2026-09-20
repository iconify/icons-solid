import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by3b00f7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="by3b00f7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:strikethrough"} {...others} />);
}

export default Component;
