import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea5ltub7g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ea5ltub7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shopping-bag-with-shekel"} {...others} />);
}

export default Component;
