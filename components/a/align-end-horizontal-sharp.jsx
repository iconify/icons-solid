import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx6-ebbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx6-ebbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-end-horizontal-sharp"} {...others} />);
}

export default Component;
