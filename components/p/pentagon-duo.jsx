import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl5rj6b3b.css';
import '../../css/l/las552baf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xl5rj6b3b"/><path class="las552baf primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pentagon-duo"} {...others} />);
}

export default Component;
