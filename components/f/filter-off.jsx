import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/c/cibe9a.css';
import '../../css/i/irlkmr.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8x2TRc7W"><path class="c5xdmn cibe9a"/><path class="c5xdmn irlkmr oxx-om"/></mask></defs><path mask="url(#SVG8x2TRc7W)" class="botfzx"/><path class="c5xdmn gd_4-q irlkmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:filter-off"} {...others} />);
}

export default Component;
