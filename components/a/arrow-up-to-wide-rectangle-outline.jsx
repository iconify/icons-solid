import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qidcoy8qd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qidcoy8qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-to-wide-rectangle-outline"} {...others} />);
}

export default Component;
