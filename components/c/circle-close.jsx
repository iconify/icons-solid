import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dltsm_4ox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dltsm_4ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:circle-close"} {...others} />);
}

export default Component;
