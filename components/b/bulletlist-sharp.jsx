import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3-nn-bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3-nn-bkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:bulletlist-sharp"} {...others} />);
}

export default Component;
