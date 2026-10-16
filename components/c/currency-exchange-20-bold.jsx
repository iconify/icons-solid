import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni7oe8l5n.css';
import '../../css/c/c7c-kxbrc.css';
import '../../css/r/rqodbzvhy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ni7oe8l5n"/><path class="c7c-kxbrc"/><path class="rqodbzvhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:currency-exchange-20-bold"} {...others} />);
}

export default Component;
