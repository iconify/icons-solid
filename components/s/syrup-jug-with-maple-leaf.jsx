import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk2q3ab5v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lk2q3ab5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:syrup-jug-with-maple-leaf"} {...others} />);
}

export default Component;
