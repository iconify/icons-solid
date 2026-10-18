import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm0xcdcgi.css';
import '../../css/b/b2xtvx_in.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mm0xcdcgi"/><path class="b2xtvx_in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biochar-20-bold"} {...others} />);
}

export default Component;
