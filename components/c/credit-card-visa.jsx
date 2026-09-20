import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/measokbln.css';
import '../../css/c/cydypsmyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="measokbln"/><path class="cydypsmyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:credit-card-visa"} {...others} />);
}

export default Component;
