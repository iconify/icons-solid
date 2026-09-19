import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3v571dab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3v571dab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:trophy"} {...others} />);
}

export default Component;
