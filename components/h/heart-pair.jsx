import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rhb-hybgp.css';
import '../../css/l/lz7_rdb_a.css';
import '../../css/l/l9f3zhoin.css';
import '../../css/a/ajxwqpb9u.css';
import '../../css/w/wx95qzg_i.css';
import '../../css/o/omfnfxbnr.css';
import '../../css/c/c5mgiiv5o.css';
import '../../css/j/jb4ug-ulo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rhb-hybgp"/><path class="lz7_rdb_a"/><path class="l9f3zhoin wm-shine"/><path class="ajxwqpb9u wm-k"/><path class="wm-a wx95qzg_i"/><path class="omfnfxbnr"/><path class="c5mgiiv5o"/><path class="jb4ug-ulo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart-pair"} {...others} />);
}

export default Component;
