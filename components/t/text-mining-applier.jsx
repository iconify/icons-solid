import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxlwz1bsp.css';
import '../../css/u/ua6u3wino.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zxlwz1bsp"/><path class="ua6u3wino"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-mining-applier"} {...others} />);
}

export default Component;
