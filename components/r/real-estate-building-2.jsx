import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bht69010r.css';
import '../../css/o/omuu71y8k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bht69010r"/><path class="omuu71y8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-2"} {...others} />);
}

export default Component;
