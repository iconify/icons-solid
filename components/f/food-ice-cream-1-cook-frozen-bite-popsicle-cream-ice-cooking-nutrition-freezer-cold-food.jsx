import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrnhq8b9q.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nrnhq8b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-ice-cream-1-cook-frozen-bite-popsicle-cream-ice-cooking-nutrition-freezer-cold-food"} {...others} />);
}

export default Component;
