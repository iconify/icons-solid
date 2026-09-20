import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te_5b4bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="te_5b4bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:sticky-note-text-sharp"} {...others} />);
}

export default Component;
