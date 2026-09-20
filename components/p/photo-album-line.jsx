import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5456z5rt.css';
import '../../css/v/v5gc3bcuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5456z5rt"/><path class="v5gc3bcuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:photo-album-line"} {...others} />);
}

export default Component;
