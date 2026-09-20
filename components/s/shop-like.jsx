import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy6etub7n.css';
import '../../css/r/rumeyobvd.css';
import '../../css/r/roxb9ubql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy6etub7n"/><path class="rumeyobvd"/><path class="roxb9ubql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shop-like"} {...others} />);
}

export default Component;
