import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz5xp2bca.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nz5xp2bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:syrup-jug-with-maple-leaf-and-droplet"} {...others} />);
}

export default Component;
