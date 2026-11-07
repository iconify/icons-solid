import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvskk7nlf.css';
import '../../css/d/d9yqzeb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvskk7nlf"/><path clip-rule="evenodd" class="d9yqzeb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-bold"} {...others} />);
}

export default Component;
