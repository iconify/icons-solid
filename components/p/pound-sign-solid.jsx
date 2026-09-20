import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqj_exb6z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iqj_exb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:pound-sign-solid"} {...others} />);
}

export default Component;
