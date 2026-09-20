import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-zvam3xw.css';

const viewBox = {"width":12,"height":16};
const content = `<path class="f-zvam3xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-symlink-file"} {...others} />);
}

export default Component;
