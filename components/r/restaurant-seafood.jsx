import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipb0gbcjw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ipb0gbcjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:restaurant-seafood"} {...others} />);
}

export default Component;
