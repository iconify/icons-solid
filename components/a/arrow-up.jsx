import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm_tybc4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lm_tybc4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:arrow-up"} {...others} />);
}

export default Component;
