import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f44evnslo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f44evnslo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vertical-fold"} {...others} />);
}

export default Component;
