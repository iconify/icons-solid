import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf4u1os6q.css';
import '../../css/e/euvn5gkav.css';
import '../../css/r/r2aeg49cb.css';
import '../../css/a/a6nvfqtpq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tf4u1os6q"><path class="euvn5gkav"/><path class="r2aeg49cb"/><path class="a6nvfqtpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:docusaurus"} {...others} />);
}

export default Component;
