import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siav9f5cp.css';
import '../../css/j/jjcws580t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="siav9f5cp"/><path class="jjcws580t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bot"} {...others} />);
}

export default Component;
