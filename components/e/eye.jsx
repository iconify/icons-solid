import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/etgs5ib1v.css';
import '../../css/h/h4kpqabof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="etgs5ib1v"/><path class="h4kpqabof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:eye"} {...others} />);
}

export default Component;
