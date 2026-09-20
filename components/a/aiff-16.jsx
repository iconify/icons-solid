import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zurdf3b8r.css';
import '../../css/v/vabm_dihy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zurdf3b8r"/><path clip-rule="evenodd" class="vabm_dihy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:aiff-16"} {...others} />);
}

export default Component;
