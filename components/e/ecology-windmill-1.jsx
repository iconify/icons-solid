import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abgiw5ybg.css';
import '../../css/o/o19_1sbli.css';
import '../../css/u/ucn7dybhs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="abgiw5ybg"/><path class="o19_1sbli"/><path class="ucn7dybhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-windmill-1"} {...others} />);
}

export default Component;
