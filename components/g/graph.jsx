import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlan15w3z.css';
import '../../css/g/ghlqhy24c.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rlan15w3z"/><path class="ghlqhy24c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:graph"} {...others} />);
}

export default Component;
