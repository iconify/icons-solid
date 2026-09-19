import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr7ghh79r.css';
import '../../css/x/xu9naxyob.css';
import '../../css/j/j9p3709ef.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nr7ghh79r"/><path class="xu9naxyob"/><path class="j9p3709ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:voice-activate"} {...others} />);
}

export default Component;
