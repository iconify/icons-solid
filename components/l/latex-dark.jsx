import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyq_9gbex.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/b/btr_qkmsu.css';
import '../../css/i/ihvybhbqi.css';
import '../../css/m/m8fuztb5p.css';
import '../../css/m/mum83aczg.css';
import '../../css/e/et3n_tbbe.css';
import '../../css/i/iemk5bbny.css';
import '../../css/x/xxrhuuc4m.css';
import '../../css/l/lqftktbaz.css';
import '../../css/m/mrpf-ibaw.css';
import '../../css/g/givb27ipj.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><path id="SVGELQ1xb5R" class="lyq_9gbex"/></defs><g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="btr_qkmsu"/><path class="ihvybhbqi"/><path class="m8fuztb5p"/><path class="mum83aczg"/><path class="et3n_tbbe"/><path class="iemk5bbny"/><path class="xxrhuuc4m"/><use href="#SVGELQ1xb5R" class="lqftktbaz"/><path class="mrpf-ibaw"/><use href="#SVGELQ1xb5R" class="lqftktbaz"/><path class="givb27ipj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:latex-dark"} {...others} />);
}

export default Component;
