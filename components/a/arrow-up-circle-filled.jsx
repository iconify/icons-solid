import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcdl0kf_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcdl0kf_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-up-circle-filled"} {...others} />);
}

export default Component;
