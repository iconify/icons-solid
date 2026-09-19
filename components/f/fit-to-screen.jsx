import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz5xefbiq.css';
import '../../css/a/am0b34b6k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zz5xefbiq"/><path class="am0b34b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fit-to-screen"} {...others} />);
}

export default Component;
