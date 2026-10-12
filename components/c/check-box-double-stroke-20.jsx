import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7atsbiux.css';
import '../../css/y/yakywwbjd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d7atsbiux"/><path class="yakywwbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-double-stroke-20"} {...others} />);
}

export default Component;
