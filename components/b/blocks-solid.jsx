import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7zjtun7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v7zjtun7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:blocks-solid"} {...others} />);
}

export default Component;
