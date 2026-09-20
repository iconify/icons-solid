import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa0l2acmx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="aa0l2acmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:linkedin"} {...others} />);
}

export default Component;
