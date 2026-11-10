import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxoxh3bbv.css';
import '../../css/w/w8lgalt2r.css';
import '../../css/u/u29my44gg.css';
import '../../css/k/k8_t5abzf.css';
import '../../css/i/iqk_2bb3f.css';
import '../../css/i/it2emrbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gxoxh3bbv"/><path class="w8lgalt2r"/><path class="u29my44gg"/><path class="k8_t5abzf"/><path class="iqk_2bb3f"/><path class="it2emrbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:images"} {...others} />);
}

export default Component;
