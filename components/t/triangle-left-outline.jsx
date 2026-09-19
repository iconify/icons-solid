import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooxeae80k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ooxeae80k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:triangle-left-outline"} {...others} />);
}

export default Component;
