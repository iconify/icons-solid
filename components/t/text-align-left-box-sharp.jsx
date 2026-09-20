import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov1wd7b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ov1wd7b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:text-align-left-box-sharp"} {...others} />);
}

export default Component;
