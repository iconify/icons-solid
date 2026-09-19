import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew8w2puiv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ew8w2puiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:number-small-5"} {...others} />);
}

export default Component;
