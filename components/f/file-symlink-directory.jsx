import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-xtz-b9x.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="s-xtz-b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-symlink-directory"} {...others} />);
}

export default Component;
