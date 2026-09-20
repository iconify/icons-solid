import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd51cn3ib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vd51cn3ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse-off"} {...others} />);
}

export default Component;
