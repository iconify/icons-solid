import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fujt1ib7p.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="fujt1ib7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:inbox"} {...others} />);
}

export default Component;
