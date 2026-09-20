import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4i-kyblv.css';
import '../../css/b/bjt9-ygkq.css';
import '../../css/x/xzmpbzbog.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o4i-kyblv"/><path class="bjt9-ygkq"/><path class="xzmpbzbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-mirror-1"} {...others} />);
}

export default Component;
