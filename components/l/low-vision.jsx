import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr1uwtbsq.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="tr1uwtbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:low-vision"} {...others} />);
}

export default Component;
