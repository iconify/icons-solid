import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzaj_mpyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hzaj_mpyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:barbell"} {...others} />);
}

export default Component;
