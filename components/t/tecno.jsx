import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5wwf8b9k.css';

const viewBox = {"width":149,"height":30};
const content = `<path clip-rule="evenodd" class="r5wwf8b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tecno"} {...others} />);
}

export default Component;
