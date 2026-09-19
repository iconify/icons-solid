import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/occxhccgf.css';
import '../../css/m/mxusxgb2n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="occxhccgf"/><path class="mxusxgb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:policy"} {...others} />);
}

export default Component;
