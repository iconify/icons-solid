import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1-5195me.css';
import '../../css/w/wyynnt73k.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="h1-5195me"/><path class="wyynnt73k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:apartment"} {...others} />);
}

export default Component;
