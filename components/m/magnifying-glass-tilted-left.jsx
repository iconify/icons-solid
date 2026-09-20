import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnjwdwbpp.css';
import '../../css/d/dwaxdk93f.css';
import '../../css/s/s5_u9qb9z.css';
import '../../css/i/ibbskobkf.css';
import '../../css/b/b6x3nibnn.css';
import '../../css/k/kz5dxcc1f.css';
import '../../css/u/uf4a4_b_g.css';
import '../../css/j/jior_j9sg.css';
import '../../css/y/yr21wobkn.css';
import '../../css/x/xa_c-n37t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xnjwdwbpp"/><path class="dwaxdk93f"/><path class="s5_u9qb9z"/><path class="ibbskobkf"/><path class="b6x3nibnn"/><path class="kz5dxcc1f"/><path class="uf4a4_b_g"/><path class="jior_j9sg"/><path class="yr21wobkn"/><path class="xa_c-n37t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:magnifying-glass-tilted-left"} {...others} />);
}

export default Component;
