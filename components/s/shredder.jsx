import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/j1gjwekep.css';
import '../../css/o/ons_n2z9r.css';
import '../../css/j/jrz-9jb8w.css';
import '../../css/o/ofpbibfie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="j1gjwekep"/><path class="ons_n2z9r"/><path class="jrz-9jb8w"/><path class="ofpbibfie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shredder"} {...others} />);
}

export default Component;
