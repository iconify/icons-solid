import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il9y_2n5b.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="il9y_2n5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pricealt"} {...others} />);
}

export default Component;
