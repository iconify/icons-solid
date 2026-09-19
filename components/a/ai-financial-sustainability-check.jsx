import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylolabndh.css';
import '../../css/c/c1x3yyvty.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ylolabndh"/><path class="c1x3yyvty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-financial-sustainability-check"} {...others} />);
}

export default Component;
