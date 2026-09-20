import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywrpkhm8h.css';
import '../../css/a/a65lo1h8j.css';
import '../../css/e/eztqw9biy.css';
import '../../css/b/bwah5-bnz.css';
import '../../css/s/syl_p7y6x.css';
import '../../css/b/bvhp_5vxu.css';
import '../../css/k/kth7c0bdt.css';
import '../../css/g/gwq52tb_u.css';
import '../../css/l/lzg5klbeb.css';
import '../../css/d/dp737plci.css';
import '../../css/s/s69nfzbbc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ywrpkhm8h"/><path class="a65lo1h8j"/><g class="eztqw9biy"><path class="bwah5-bnz"/><circle class="syl_p7y6x"/><path class="bvhp_5vxu"/><path class="kth7c0bdt"/></g><g class="gwq52tb_u"><path class="lzg5klbeb"/><path class="dp737plci"/><circle class="syl_p7y6x"/><path class="s69nfzbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-in-manual-wheelchair-medium-dark-skin-tone"} {...others} />);
}

export default Component;
