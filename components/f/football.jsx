import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr-0ew2jr.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<path class="wr-0ew2jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:football"} {...others} />);
}

export default Component;
