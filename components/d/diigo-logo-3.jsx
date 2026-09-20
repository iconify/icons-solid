import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s2yn8m4oe.css';
import '../../css/q/qe0cn2bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="s2yn8m4oe"/><path class="qe0cn2bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:diigo-logo-3"} {...others} />);
}

export default Component;
