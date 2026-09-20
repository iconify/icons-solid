import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnw2i6g0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnw2i6g0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:sofa-sharp"} {...others} />);
}

export default Component;
