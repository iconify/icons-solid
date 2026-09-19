import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skkkx6ncv.css';
import '../../css/o/ors_3pbhc.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="skkkx6ncv"/><path class="ors_3pbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-reverse-fill-12"} {...others} />);
}

export default Component;
