import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo-ux8bhe.css';

const viewBox = {"width":961,"height":960};
const content = `<path class="fo-ux8bhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dominofive"} {...others} />);
}

export default Component;
