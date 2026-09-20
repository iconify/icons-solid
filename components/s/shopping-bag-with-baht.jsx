import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enltw_b2g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="enltw_b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shopping-bag-with-baht"} {...others} />);
}

export default Component;
