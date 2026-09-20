import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uurmy6bna.css';
import '../../css/e/eivsv4x-i.css';
import '../../css/d/d7sz30-lr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="uurmy6bna"/><rect class="eivsv4x-i"/><path class="d7sz30-lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:library"} {...others} />);
}

export default Component;
