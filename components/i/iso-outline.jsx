import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiv05cixr.css';
import '../../css/w/w1voi0bfp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qiv05cixr"/><path class="w1voi0bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:iso-outline"} {...others} />);
}

export default Component;
