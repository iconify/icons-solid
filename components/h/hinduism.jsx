import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sobt5obrd.css';
import '../../css/a/aws57erkg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="sobt5obrd"/><path class="aws57erkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hinduism"} {...others} />);
}

export default Component;
