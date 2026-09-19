import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1c5y3bdo.css';
import '../../css/a/avue01box.css';
import '../../css/e/empys87bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n1c5y3bdo"/><path class="avue01box"/><path class="empys87bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:recovery-mail"} {...others} />);
}

export default Component;
