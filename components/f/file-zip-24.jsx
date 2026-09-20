import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqg7_db4w.css';
import '../../css/f/frhmf7-sb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqg7_db4w"/><path class="frhmf7-sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-zip-24"} {...others} />);
}

export default Component;
