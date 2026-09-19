import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9inqtbkm.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="z9inqtbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:pagelines"} {...others} />);
}

export default Component;
