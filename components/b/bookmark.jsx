import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6sj6mbqo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e6sj6mbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:bookmark"} {...others} />);
}

export default Component;
