import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l8802gb_v.css';
import '../../css/i/iuyz0_8ts.css';
import '../../css/j/jy70mhboz.css';
import '../../css/r/rwx8arbdh.css';
import '../../css/d/dbwmo8bvj.css';
import '../../css/b/bhrj_13qs.css';
import '../../css/v/vleqwjbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l8802gb_v"/><path class="iuyz0_8ts"/><path class="jy70mhboz wm-shine"/><path class="rwx8arbdh wm-k"/><path class="dbwmo8bvj wm-a"/><path class="bhrj_13qs"/><path class="vleqwjbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:washing-machine"} {...others} />);
}

export default Component;
