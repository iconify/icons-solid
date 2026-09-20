import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pd04wkbuc.css';
import '../../css/i/ib3p69b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="pd04wkbuc"/><path class="ib3p69b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:thumbs-up"} {...others} />);
}

export default Component;
