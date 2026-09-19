import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1f2wrbyt.css';

const viewBox = {"width":488,"height":512};
const content = `<path class="g1f2wrbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:google"} {...others} />);
}

export default Component;
