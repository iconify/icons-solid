import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnzvm5byq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnzvm5byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:image-heart"} {...others} />);
}

export default Component;
