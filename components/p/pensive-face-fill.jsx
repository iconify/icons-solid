import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3kr0wb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h3kr0wb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pensive-face-fill"} {...others} />);
}

export default Component;
