import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/miwahzg0r.css';
import '../../css/u/uijbiodsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="miwahzg0r"/><path class="uijbiodsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:repeat-once"} {...others} />);
}

export default Component;
