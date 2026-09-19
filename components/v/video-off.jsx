import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz4fe1p6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz4fe1p6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:video-off"} {...others} />);
}

export default Component;
