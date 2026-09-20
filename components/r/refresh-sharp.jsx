import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-pxa7trs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-pxa7trs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:refresh-sharp"} {...others} />);
}

export default Component;
