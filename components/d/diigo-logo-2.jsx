import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/a/aznomsb9b.css';
import '../../css/f/f560z8mya.css';
import '../../css/t/tdophacau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="aznomsb9b"/><path class="f560z8mya"/><path class="tdophacau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:diigo-logo-2"} {...others} />);
}

export default Component;
