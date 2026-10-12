import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoihmqbaa.css';
import '../../css/l/lx3ia5bzn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aoihmqbaa"/><path class="lx3ia5bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:shopping-cart-stroke-20"} {...others} />);
}

export default Component;
