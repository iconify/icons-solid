import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ummvq7b2g.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/f/f_9b2hbde.css';
import '../../css/l/lbpdgrsul.css';
import '../../css/o/ojye25dlw.css';
import '../../css/k/k0iu7x-qq.css';
import '../../css/k/kk1mktbol.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ummvq7b2g"/><path class="efhtg0b9p"/><path class="f_9b2hbde"/><path class="lbpdgrsul"/><path class="ojye25dlw"/><path class="k0iu7x-qq"/><path class="kk1mktbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-refresh"} {...others} />);
}

export default Component;
