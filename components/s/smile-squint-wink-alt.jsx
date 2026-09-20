import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwx2k6b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwx2k6b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:smile-squint-wink-alt"} {...others} />);
}

export default Component;
