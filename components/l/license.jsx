import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7dbebbz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jb7dbebbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:license"} {...others} />);
}

export default Component;
