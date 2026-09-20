import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jex5sdbos.css';
import '../../css/z/zuewsj7zf.css';
import '../../css/d/dqa102bvf.css';
import '../../css/u/udd0mhbiw.css';
import '../../css/f/fr3aapnsa.css';
import '../../css/m/msf817bvz.css';
import '../../css/x/xmt70cc-p.css';
import '../../css/p/pgnbj5btc.css';
import '../../css/j/jliqcmtfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jex5sdbos"/><path class="zuewsj7zf"/><path class="dqa102bvf"/><path class="udd0mhbiw"/><path class="fr3aapnsa"/><path class="msf817bvz"/><path class="xmt70cc-p"/><path class="pgnbj5btc"/><path class="jliqcmtfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:database-1"} {...others} />);
}

export default Component;
