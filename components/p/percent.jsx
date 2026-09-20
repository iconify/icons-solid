import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9ewivb3f.css';
import '../../css/q/q7f-xhboq.css';
import '../../css/z/z6-akobdf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r9ewivb3f"/><path class="q7f-xhboq"/><path class="z6-akobdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:percent"} {...others} />);
}

export default Component;
