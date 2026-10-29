import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug732s5ne.css';
import '../../css/g/gmngpvtjg.css';
import '../../css/n/n2mzkcb0s.css';
import '../../css/t/t6zi4sl2r.css';
import '../../css/q/q31andocl.css';
import '../../css/s/suljcmt6k.css';
import '../../css/m/mj4fkxbcz.css';
import '../../css/c/c-sgcdb6y.css';
import '../../css/c/cmv55wbka.css';
import '../../css/b/bsdbi3bwv.css';
import '../../css/g/ghaukdl7h.css';
import '../../css/t/t7rqkc-da.css';
import '../../css/v/vuudddbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug732s5ne wm-shadow"/><path class="gmngpvtjg wm-k"/><path class="n2mzkcb0s wm-k"/><path class="t6zi4sl2r wm-k"/><path class="q31andocl wm-k"/><path class="suljcmt6k wm-k"/><path class="mj4fkxbcz wm-shine"/><path class="c-sgcdb6y wm-a"/><path class="cmv55wbka wm-a"/><path class="bsdbi3bwv wm-a"/><path class="ghaukdl7h wm-a"/><path class="t7rqkc-da wm-a"/><path class="vuudddbnf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:database"} {...others} />);
}

export default Component;
