import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3-oi6oyl.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="c3-oi6oyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:restaurant-pizza-11"} {...others} />);
}

export default Component;
