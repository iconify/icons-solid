import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj3g-36wb.css';
import '../../css/h/hoczzqb5s.css';
import '../../css/m/ml860nrta.css';
import '../../css/e/eqh2q3bcc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fj3g-36wb"/><path class="hoczzqb5s"/><path class="ml860nrta"/><path class="eqh2q3bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:multimeter-20"} {...others} />);
}

export default Component;
