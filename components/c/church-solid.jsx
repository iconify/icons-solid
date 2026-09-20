import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7lr2mkyr.css';
import '../../css/h/hhhhlk_ra.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j7lr2mkyr"/><path class="hhhhlk_ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:church-solid"} {...others} />);
}

export default Component;
