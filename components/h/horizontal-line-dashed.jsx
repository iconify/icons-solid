import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3kdhjb0k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h3kdhjb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:horizontal-line-dashed"} {...others} />);
}

export default Component;
