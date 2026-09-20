import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z2r9h7xkr.css';
import '../../css/e/ef9qwv4zg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="z2r9h7xkr"/><path class="ef9qwv4zg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:feedly-logo"} {...others} />);
}

export default Component;
