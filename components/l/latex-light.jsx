import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyq_9gbex.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/e/eigqmt4gh.css';
import '../../css/q/qhwsbjehr.css';
import '../../css/k/kvup8wmld.css';
import '../../css/g/gpbst1bdi.css';
import '../../css/e/ehw7zyb6e.css';
import '../../css/i/iemk5bbny.css';
import '../../css/x/xxrhuuc4m.css';
import '../../css/l/lqftktbaz.css';
import '../../css/m/mrpf-ibaw.css';
import '../../css/g/givb27ipj.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><path id="SVGELQ1xb5R" class="lyq_9gbex"/></defs><g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="eigqmt4gh"/><path class="qhwsbjehr"/><path class="kvup8wmld"/><path class="gpbst1bdi"/><path class="ehw7zyb6e"/><path class="iemk5bbny"/><path class="xxrhuuc4m"/><use href="#SVGELQ1xb5R" class="lqftktbaz"/><path class="mrpf-ibaw"/><use href="#SVGELQ1xb5R" class="lqftktbaz"/><path class="givb27ipj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:latex-light"} {...others} />);
}

export default Component;
