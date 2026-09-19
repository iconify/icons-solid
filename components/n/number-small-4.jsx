import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5o7lacsx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w5o7lacsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:number-small-4"} {...others} />);
}

export default Component;
