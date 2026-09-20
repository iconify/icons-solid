import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g05kqyb8m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g05kqyb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-question"} {...others} />);
}

export default Component;
