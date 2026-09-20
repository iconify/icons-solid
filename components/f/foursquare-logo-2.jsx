import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/disstbc7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="disstbc7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:foursquare-logo-2"} {...others} />);
}

export default Component;
