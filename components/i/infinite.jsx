import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsyc3nk8h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6.5};
const content = `<path class="vsyc3nk8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:infinite"} {...others} />);
}

export default Component;
