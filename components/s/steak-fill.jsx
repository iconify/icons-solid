import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkhcm6b_s.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="hkhcm6b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:steak-fill"} {...others} />);
}

export default Component;
