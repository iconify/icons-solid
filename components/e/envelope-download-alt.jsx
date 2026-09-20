import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok8dtubfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok8dtubfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:envelope-download-alt"} {...others} />);
}

export default Component;
