import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztxrqe1dc.css';
import '../../css/e/e9o9utdiz.css';
import '../../css/p/pdet7_fsg.css';
import '../../css/t/tdbm-pn5a.css';
import '../../css/h/hp8csvbij.css';
import '../../css/t/t_5vm7b8l.css';
import '../../css/y/yut03wbyw.css';
import '../../css/j/jp6h7vb5r.css';
import '../../css/f/fnvb-mpzs.css';
import '../../css/b/b2u5kr4uh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow ztxrqe1dc"/><path class="e9o9utdiz wm-k"/><path class="pdet7_fsg wm-k"/><path class="tdbm-pn5a wm-k"/><path class="hp8csvbij wm-k"/><path class="t_5vm7b8l wm-k"/><path class="wm-shine yut03wbyw"/><path class="jp6h7vb5r wm-a"/><path class="fnvb-mpzs wm-a"/><path class="b2u5kr4uh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:laddoo"} {...others} />);
}

export default Component;
