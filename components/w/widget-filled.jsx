import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crzcs7bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crzcs7bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget-filled"} {...others} />);
}

export default Component;
