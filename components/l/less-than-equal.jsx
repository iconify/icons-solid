import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chm1hdben.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="chm1hdben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:less-than-equal"} {...others} />);
}

export default Component;
