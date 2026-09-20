import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inm7k4bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="inm7k4bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:linkedin"} {...others} />);
}

export default Component;
