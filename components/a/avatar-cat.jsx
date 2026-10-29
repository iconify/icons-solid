import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5cxsabix.css';
import '../../css/w/w8maf9nds.css';
import '../../css/l/lz9xqpzcx.css';
import '../../css/s/s4oh6c5vz.css';
import '../../css/j/jxgkvbbkw.css';
import '../../css/i/izw4jxm4q.css';
import '../../css/d/dd95ylb5o.css';
import '../../css/v/vvho7jqji.css';
import '../../css/i/ihkpambwq.css';
import '../../css/y/yudov_bac.css';
import '../../css/o/otrabhb1h.css';
import '../../css/r/rll7wqbco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5cxsabix wm-shadow"/><path class="w8maf9nds wm-k"/><path class="lz9xqpzcx wm-k"/><path class="s4oh6c5vz wm-k"/><path class="jxgkvbbkw wm-k"/><path class="izw4jxm4q wm-k"/><path class="dd95ylb5o wm-shine"/><path class="vvho7jqji wm-k"/><path class="ihkpambwq wm-k"/><path class="wm-k yudov_bac"/><path class="otrabhb1h wm-a"/><path class="rll7wqbco wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-cat"} {...others} />);
}

export default Component;
