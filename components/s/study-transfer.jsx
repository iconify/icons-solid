import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq-zhfbfg.css';
import '../../css/d/did4e-x8k.css';
import '../../css/f/fbylp1beo.css';
import '../../css/v/v29e9xbrp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sq-zhfbfg"/><path class="did4e-x8k"/><path class="fbylp1beo"/><path class="v29e9xbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-transfer"} {...others} />);
}

export default Component;
