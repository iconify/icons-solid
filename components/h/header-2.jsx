import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igipjz3oo.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};
const content = `<path class="igipjz3oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:header-2"} {...others} />);
}

export default Component;
