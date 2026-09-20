import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1tta3b2f.css';
import '../../css/j/jdv-s5bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="n1tta3b2f"/><path class="jdv-s5bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:aspect-ratio-square"} {...others} />);
}

export default Component;
