import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcw2bfu7k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xcw2bfu7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:soft-serve-in-cup-in-dispensing-machine-with-scoop-of-ice-cream-in-cone"} {...others} />);
}

export default Component;
