import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_elxzbvf.css';
import '../../css/m/mnvhu3zei.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="t_elxzbvf"/><path class="mnvhu3zei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wabi"} {...others} />);
}

export default Component;
