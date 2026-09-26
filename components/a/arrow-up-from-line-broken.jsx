import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-1nc6b6p.css';
import '../../css/n/n-e1qqb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p-1nc6b6p"/><path class="n-e1qqb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-from-line-broken"} {...others} />);
}

export default Component;
