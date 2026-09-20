import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbeushb0e.css';
import '../../css/r/rik56bhzy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qbeushb0e"/><path class="rik56bhzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-desert-cupcake"} {...others} />);
}

export default Component;
