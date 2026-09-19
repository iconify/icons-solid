import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kelnhhbkr.css';

const viewBox = {"width":1026,"height":1026};
const content = `<path class="kelnhhbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:coffeebean"} {...others} />);
}

export default Component;
