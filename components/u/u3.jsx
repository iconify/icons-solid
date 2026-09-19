import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a21g7ybtt.css';
import '../../css/o/ogc9qccuw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a21g7ybtt"/><path class="ogc9qccuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:u3"} {...others} />);
}

export default Component;
