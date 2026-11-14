import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozde0bblw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozde0bblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:skoda-2026-long"} {...others} />);
}

export default Component;
