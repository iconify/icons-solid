import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t19jz2bby.css';
import '../../css/y/yti26qboi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t19jz2bby"/><path class="yti26qboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:undefined"} {...others} />);
}

export default Component;
