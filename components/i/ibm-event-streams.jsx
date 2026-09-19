import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7w-pxplo.css';
import '../../css/i/iv1cdqgvk.css';
import '../../css/n/n7mqk6l-u.css';
import '../../css/t/tayf2v4-u.css';
import '../../css/k/k39_n0lox.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b7w-pxplo"/><circle class="iv1cdqgvk"/><path class="n7mqk6l-u"/><circle class="tayf2v4-u"/><path class="k39_n0lox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-event-streams"} {...others} />);
}

export default Component;
