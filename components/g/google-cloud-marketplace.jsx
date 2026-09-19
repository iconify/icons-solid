import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/v/v-_mygdpg.css';
import '../../css/u/uxxecqbbp.css';
import '../../css/d/dj5xz1-tk.css';
import '../../css/m/mkkjd439a.css';
import '../../css/u/u20_gi81t.css';
import '../../css/x/xsqoo7nnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path clip-rule="evenodd" class="v-_mygdpg"/><path clip-rule="evenodd" class="uxxecqbbp"/><path class="dj5xz1-tk"/><path clip-rule="evenodd" class="mkkjd439a"/><path clip-rule="evenodd" class="u20_gi81t"/><path clip-rule="evenodd" class="xsqoo7nnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:google-cloud-marketplace"} {...others} />);
}

export default Component;
