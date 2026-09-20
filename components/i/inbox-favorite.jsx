import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pkjaxubeg.css';
import '../../css/o/osa7a8wgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pkjaxubeg"/><path class="osa7a8wgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:inbox-favorite"} {...others} />);
}

export default Component;
