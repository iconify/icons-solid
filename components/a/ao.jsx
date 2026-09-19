import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u9j2jq8qm.css';
import '../../css/h/hfdlftbfd.css';
import '../../css/k/ktvyjx33i.css';
import '../../css/e/efzxyzb1i.css';
import '../../css/v/vn34bdcic.css';
import '../../css/w/wd0-cz21h.css';
import '../../css/z/z14fekb7u.css';
import '../../css/k/ktfjgbc-g.css';
import '../../css/j/jknmelb_y.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="bi12bsetm"><path class="u9j2jq8qm"/><path class="hfdlftbfd"/><path class="ktvyjx33i"/><path class="efzxyzb1i"/><path class="vn34bdcic"/><path class="wd0-cz21h"/><path class="z14fekb7u"/><path class="ktfjgbc-g"/><path class="jknmelb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ao"} {...others} />);
}

export default Component;
