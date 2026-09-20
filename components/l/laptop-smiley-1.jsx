import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgk9nmbel.css';
import '../../css/u/uf68rgz2p.css';
import '../../css/m/m-r43mcvd.css';
import '../../css/c/chgg2-0qo.css';
import '../../css/t/t9p3m7izt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xgk9nmbel"/><path class="uf68rgz2p"/><path class="m-r43mcvd"/><path class="chgg2-0qo"/><path class="t9p3m7izt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laptop-smiley-1"} {...others} />);
}

export default Component;
