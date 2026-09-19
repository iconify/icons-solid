import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su8f1hu3j.css';
import '../../css/r/r6zc52b7f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="su8f1hu3j"/><path class="r6zc52b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:education"} {...others} />);
}

export default Component;
