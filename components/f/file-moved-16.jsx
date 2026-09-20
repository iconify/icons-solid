import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9h9hwd0t.css';
import '../../css/g/g1xl1cbjm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f9h9hwd0t"/><path class="g1xl1cbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-moved-16"} {...others} />);
}

export default Component;
