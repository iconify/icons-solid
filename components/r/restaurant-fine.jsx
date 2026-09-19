import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7r-q4bef.css';
import '../../css/k/k-aete30d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c7r-q4bef"/><path class="k-aete30d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:restaurant-fine"} {...others} />);
}

export default Component;
