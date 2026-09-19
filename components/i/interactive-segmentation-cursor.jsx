import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taoscib-d.css';
import '../../css/g/g4_srbq7h.css';
import '../../css/n/nly94abjo.css';
import '../../css/g/g52j4gb0l.css';
import '../../css/e/eziplt3ei.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="taoscib-d"/><path class="g4_srbq7h"/><path class="nly94abjo"/><path class="g52j4gb0l"/><path class="eziplt3ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:interactive-segmentation-cursor"} {...others} />);
}

export default Component;
