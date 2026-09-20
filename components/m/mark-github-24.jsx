import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf64je3mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wf64je3mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mark-github-24"} {...others} />);
}

export default Component;
