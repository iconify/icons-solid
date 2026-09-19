import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sw9hmmb_d.css';
import '../../css/q/q9jowybli.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="sw9hmmb_d"/><circle class="q9jowybli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:key"} {...others} />);
}

export default Component;
