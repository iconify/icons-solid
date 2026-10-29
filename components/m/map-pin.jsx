import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyk52vcbo.css';
import '../../css/k/kj_vsrs9q.css';
import '../../css/h/heruavb_j.css';
import '../../css/e/edhpy_bcn.css';
import '../../css/j/j-kdc0bya.css';
import '../../css/s/sifv1hbbo.css';
import '../../css/a/ae0s139wb.css';
import '../../css/i/i2u5ztcrm.css';
import '../../css/c/c1gz6zv4x.css';
import '../../css/r/r4e09mbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lyk52vcbo wm-shadow"/><path class="kj_vsrs9q wm-k"/><path class="heruavb_j wm-k"/><path class="edhpy_bcn wm-k"/><path class="j-kdc0bya wm-k"/><path class="sifv1hbbo wm-k"/><path class="ae0s139wb wm-shine"/><path class="i2u5ztcrm wm-a"/><path class="c1gz6zv4x wm-a"/><path class="r4e09mbfx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:map-pin"} {...others} />);
}

export default Component;
