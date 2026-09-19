import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5ga2nbvw.css';
import '../../css/k/kafuruqvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g5ga2nbvw"/><path class="kafuruqvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:login-square-01"} {...others} />);
}

export default Component;
