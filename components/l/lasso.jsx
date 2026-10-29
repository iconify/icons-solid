import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw7i1-b3w.css';
import '../../css/f/flfkqdb1e.css';
import '../../css/a/adbfvqbgn.css';
import '../../css/s/s94goib6o.css';
import '../../css/m/mel302bto.css';
import '../../css/s/su3rdnb_c.css';
import '../../css/k/kugwr473r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zw7i1-b3w"/><path class="flfkqdb1e wm-k"/><path class="adbfvqbgn wm-k"/><path class="s94goib6o wm-a"/><path class="mel302bto wm-a"/><path class="su3rdnb_c wm-a"/><path class="kugwr473r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lasso"} {...others} />);
}

export default Component;
