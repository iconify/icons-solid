import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy4ubgbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy4ubgbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:book-info"} {...others} />);
}

export default Component;
