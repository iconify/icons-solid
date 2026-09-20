import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eju7aybkm.css';
import '../../css/l/lbkq0uu2j.css';
import '../../css/o/o3-rgut3h.css';
import '../../css/u/uymgdabjo.css';
import '../../css/u/usij3obqg.css';
import '../../css/d/db-2wwj4w.css';
import '../../css/x/xi8rvmb9q.css';
import '../../css/v/v1ud_ccdi.css';
import '../../css/h/h40rlzb7b.css';
import '../../css/n/nn3qygbpx.css';
import '../../css/x/xaxj1i3fu.css';
import '../../css/p/pz2zfubdr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eju7aybkm"/><path class="lbkq0uu2j"/><path class="o3-rgut3h"/><path class="uymgdabjo"/><path class="usij3obqg"/><path class="db-2wwj4w"/><path class="xi8rvmb9q"/><path class="v1ud_ccdi"/><path class="h40rlzb7b"/><path class="nn3qygbpx"/><path class="xaxj1i3fu"/><path class="pz2zfubdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:raised-fist-1"} {...others} />);
}

export default Component;
