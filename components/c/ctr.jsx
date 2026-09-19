import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rtw0cd83v.css';
import '../../css/s/sajduhjaw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="rtw0cd83v"/><path class="sajduhjaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ctr"} {...others} />);
}

export default Component;
