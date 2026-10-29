import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rzvi263la.css';
import '../../css/x/xujq61b3g.css';
import '../../css/a/abs9vim9l.css';
import '../../css/n/ndg34cbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rzvi263la"/><path class="wm-shadow xujq61b3g"/><path class="abs9vim9l"/><path class="ndg34cbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-fork-engrave"} {...others} />);
}

export default Component;
