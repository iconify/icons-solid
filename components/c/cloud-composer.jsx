import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek96gn5sw.css';
import '../../css/y/yfluzxblp.css';
import '../../css/c/cn9haht9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ek96gn5sw"/><path class="yfluzxblp"/><path class="cn9haht9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-composer"} {...others} />);
}

export default Component;
