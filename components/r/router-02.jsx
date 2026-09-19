import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhh986b1a.css';
import '../../css/e/evnrmr1mo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rhh986b1a"/><path class="evnrmr1mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:router-02"} {...others} />);
}

export default Component;
