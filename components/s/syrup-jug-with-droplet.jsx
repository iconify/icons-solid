import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdj2-4vry.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cdj2-4vry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:syrup-jug-with-droplet"} {...others} />);
}

export default Component;
