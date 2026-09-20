import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oelcicc3r.css';

const viewBox = {"width":150.5,"height":25.6};
const content = `<path class="oelcicc3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kraken-light"} {...others} />);
}

export default Component;
